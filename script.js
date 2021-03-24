// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

// Global Variables
var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var holdingTime = 1000;
var strikes = 0;
var time = 10;
var timer;
var ready;

function startGame(){
    // initialize game variables
    // random button patterns using Math.random() and Math.floor()
    for(var i = 0; i < pattern.length; i++) {
      pattern[i] = Math.floor(Math.random() * 6) + 1;
    }
    progress = 0;
    gamePlaying = true;
    guessCounter = 0;
    clueHoldTime = holdingTime;
    strikes = 0;
    clearInterval(timer);
    clearInterval(ready);
    document.getElementById("lives").innerHTML = ("Lives: " + (3 - strikes));
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
}

function stopGame() {
    gamePlaying = false;
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
    // stop timer and ready intervals
    clearInterval(timer);
    clearInterval(ready);
}

// added difficulty to make the game more challenging
function setDifficulty(id) {
  if(!gamePlaying) {
    // change time that each clue plays based on difficulty
    if(id == "Easy")
      holdingTime = 1000;
    else if(id == "Medium")
      holdingTime = 900;
    else
      holdingTime = 800;
    document.getElementById("difficulty").innerHTML = ("Difficulty: " + id);
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 232.7,
  2: 183.5,
  3: 360,
  4: 430.1,
  5: 293,
  6: 415.3
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  // make image visible when mouse on button
  document.getElementById('img' + btn).style.visibility = "visible";
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}

function stopTone(btn){
  // make image hidden when mouse off button
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
  document.getElementById('img' + btn).style.visibility = "hidden";
}

// Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  // make image visible when playing clue
  document.getElementById('img' + btn).style.visibility = "visible";
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  // make image hidden after playing clue
  document.getElementById('img' + btn).style.visibility = "hidden";
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  // make sure to reset timer and ready intervals for a new clue
  clearInterval(timer);
  clearInterval(ready);
  time = 10;
  document.getElementById("time").innerHTML = ("Time: " + time);
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  // time interval while the clues are being played so the timer doesn't count down when the clues are being played
  ready = setInterval(readyTimer, delay);
}

function readyTimer() {
  // clear this interval and start the timer
  clearInterval(ready);
  timer = setInterval(myTimer, 1000);
}

function myTimer() {
  // display time with HTML
  document.getElementById("time").innerHTML = ("Time: " + time);
  time--;
  // if the timer reaches 0, restart timer, add a strike, and replay clue sequnce
  if(time == 0) {
    strikes++;
    document.getElementById("lives").innerHTML = ("Lives: " + (3 - strikes));
    // lose game on three strikes
    if(strikes == 3)
      loseGame();
    else
      playClueSequence();
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }

  // add game logic here
  if(btn == pattern[guessCounter]) {
    guessCounter++;
    if(guessCounter == progress + 1) {
      progress++;
      if(progress == pattern.length)
        winGame();  
      else {
        // decrease time each button clue is played for each successive guesses
        clueHoldTime -= 75;
        playClueSequence();
      }
    }
  }
  else {
    // a strike is gained when a mistake is made
    strikes++;
    document.getElementById("lives").innerHTML = ("Lives: " + (3 - strikes));
    // lose game on three strikes
    if(strikes == 3)
      loseGame();
    else
      playClueSequence();
  }
}
