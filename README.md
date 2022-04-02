# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Ayman Bolad

Time spent: 3.5 hours  

Link to project: https://glitch.com/edit/#!/codepaths-next-student-hopefully-please-lol

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Added difficulty options, increasing the amount of rounds by four per difficulty. The default difficulty and the easy difficult are the same, so if no difficulty is selected it will automatically be "Easy".

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![Light Sound Demo Gif](https://user-images.githubusercontent.com/100540818/161368144-8e577761-d291-4775-a894-42e003e5ce40.gif)



## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

Aside from following the write up, I used a w3 schools link to play around with hexidecimal colors in css.
Link Used: https://www.w3schools.com/colors/colors_picker.asp?colorhex=A0522D

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

One of the biggest challenges I tackled was the creation of difficulty modes. Originally, I wanted to exponentially increase the speed per difficulty, 
but I felt it was out of the scope of my technical abilities so I settled for one increment of speed adjustment on the “Hard” difficulty mode. 
Instead, I settled for adding extra rounds to each difficulty in increments of four, excluding easy which just matched the regular amount of rounds. 
At first, I had no idea no idea how I would do this, but then remembered that the default function was provided. 
For this to work, I created a conditional function listing each of the buttons, and ensured that the scope within each if statement was only executed on press. 
Once that was completed, I assigned an empty array to the pattern, then replicated the previous loop used for the default mode. 
I altered the loop to have the pattern iterate through an array of integers that changed in the parameter of each function.
I also assigned variables to each mode, such that each mode could have a speed increase. 
Since I was fairly vexed at the idea of speed increments given that I had aspired for something exponential, I settled on having only one increment so that the game didn’t feel boring by just adding more rounds. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

When creating the submission, I realized that there were still a lot of things I could do to improve the program, but didn’t know how. 
I would’ve loved to add a tiny dot with 50% opacity to replace the cursor, add a dark / light theme, add a drop down menu for modes, and the list goes on.
While I have begun my programming journey through the scope of front end web development, I still wonder how seasoned developers go about organizing their thoughts, planning out projects, and determining which functionalities align with the direction they want to take their projects in.
Additionally, I would love to learn and/or ask more about what makes a good website in terms of design, as well as how websites could be more dynamic in both animation and information.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had a few more hours to work on the project, I would go back and fine tune each of the smaller details involved, as well as add co-op functionalities. 
To start, I would love to center the header, customize the design of the start and stop buttons, make the background darker, play around with bolder fonts, and add gradients to the header and the buttons. 
I would have the button’s shape span 80% of the page, and change the frequencies to that of a certain set of tunes (maybe harp chords?). 
I would also add speed to the pre-existing difficulties, so more devout players could play on faster modes with exponential speed increases. 
To round out the project, I would allow for G-Mail logins so that a local and global leaderboard could be displayed to show how fast individuals won the game. 
This would aid in making the game more fun and collaborative, where friends could compete. 

## Interview Recording URL Link
[My 5-minute Interview Recording] - 
