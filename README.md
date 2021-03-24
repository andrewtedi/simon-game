# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Andrew Tedijanto

Time spent: 2.5 hours spent in total

Link to project: http://glitch.com/edit/#!/comfortable-angry-raincoat

## Required Functionality

The following **required** functionality is complete:

* [✔] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [✔] "Start" button toggles between "Start" and "Stop" when clicked. 
* [✔] Game buttons each light up and play a sound when clicked. 
* [✔] Computer plays back sequence of clues including sound and visual cue for each button
* [✔] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [✔] User wins the game after guessing a complete pattern
* [✔] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [✔] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [✔] Buttons use a pitch (frequency) other than the ones in the tutorial
* [✔] More than 4 functional game buttons
* [✔] Playback speeds up on each turn
* [✔] Computer picks a different pattern each time the game is played
* [✔] Player only loses after 3 mistakes (instead of on the first mistake)
* [✔] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [✔] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [✔] List anything else that you can get done to improve the app!

* Edited h1 and p tags to give instruction.
* Added an HTML display for time and lives.
* Added difficulties to the game: Increasing difficulties decreased time that each clue would be played
* Changed fonts of h1 and p tags

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](your-link-here)


## Reflection Questions
1. If you used any outsideresources to help complete your submission (websites, books, people, etc) list them here. 

* HTML Color Groups: https://www.w3schools.com/colors/colors_groups.asp
* Math.random: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
* setInterval: https://www.w3schools.com/jsref/met_win_setinterval.asp
* clearInterval: https://www.w3schools.com/jsref/met_win_clearinterval.asp
* innerHTML: https://www.w3schools.com/js/js_output.asp
* Click button display/hide: https://stackoverflow.com/questions/16504202/html-click-button-display-hide-picture
* Pass elementID to JS function: https://stackoverflow.com/questions/17292176/pass-element-id-to-javascript-function/17292262
* CSS Text Shadow: https://www.w3schools.com/css/css_text_shadow.asp
* Fonts: https://www.w3.org/Style/Examples/007/fonts.en.html

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

The biggest challenge I encountered when creating this game was particularly the time interval aspect. I had some difficulty initially finding where in the code I needed to clear the intervals. If the interval wasn't cleared, the time would keep going down and at some point, the "Game Over" alert would play. Sometimes multiple intervals would be set at the same time, further complicating things. Although I was initially relieved when the "timer" interval was set correctly, I realized that I'd have to make another interval so that the timer doesn't go down while the clues are being played. This caused the same problems as earlier, but it took less time to fix because of how I handled the intervals not working earlier. The way that I solved these issues was very simple: trial and error. I placed the clearInterval funciton in areas that I figured would make sense. I would try to make a flowchart of where the interval is going in my head and use that to try and figure out where is best to place the clearInterval functions. To implement both the "timer" and "ready" time intervals, it took around an hour because of the interval issues. Finding a solution to this error gave me a better understanding of how to make timers work and if I would ever need to implement a timer in future projects, I would have a better idea of where to start and clear my time intervals.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

* **What are good practices for web developers when developing a product?** I've heard that web developers can use tools such as Adobe XD, WebFlow, and other wireframing fools for developing an inital UI for a website or mobile app, but I'm not entirely sure as for what would objectively be a good layout for a page or not. What are some things that all web developers should look for when developing a page?
* **What is the testing process like for web development?** I've heard that web development testing involves what are called "quality control checks", however I'm not exactly familar with what that means. What are some things to say put on a checklist for web development testing to ensure that a page or the whole UI of an application looks appealing both in aesthetic and experience?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had a few more hours to work on this project, I would further change the colors, fonts, and buttons. I would add slide and fade animations to some of the text. I could make the buttons rounder as well as add more border shadow. I could also put more thought into the images and move the layout of the buttons to further make the game resemble a Simon toy. Another part of the game I'd like to change is to add a high score. Instead of winning after 8 successive button presses in a pattern. I would have the game continue until the player makes three mistakes. I could make three separate high scores for each difficulty and display each one. Also, in addition to an alert being displayed when the game is over, I would add a sound que to signify that the game is over.



## License

    Copyright Andrew Tedijanto

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
