// Global Constants
const nextClueWaitTime = 1000;

//Global Variables
var clueHoldTime = 500;
var cluePauseTime = clueHoldTime / 3;
var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var difficulty; 

function startGame(){
  // initialize game variables
  progress = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
}

function randomPattern(){
  let temp = [];
  for(let i = 0; i < 8; i++){
    temp.push(Math.floor((Math.random()*6) + 1 ));
  }
  return temp;
}

// Sound Synthesis Functions
const freqMap = {
  1: 250,
  2: 350,
  3: 450,
  4: 550,
  5: 650,
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
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit");
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit");
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime;
  for(let i=0; i <= progress; i++){
    console.log("play single clue: " + pattern[i] + " in "+ delay + " ms.")
    setTimeout(playSingleClue,delay,pattern[i]) //sets Timeout to play clue;
    delay += clueHoldTime;
    delay += cluePauseTime;
  if (!document.getElementById("hardBtn").classList.contains("pressed")) {
      delay += clueHoldTime;
      delay += cluePauseTime;
    } else {
      delay += clueHoldTime/2;
      delay += cluePauseTime/2;
    }
  }
  if (clueHoldTime >= 150) {
    clueHoldTime = clueHoldTime - 50;
  }
  cluePauseTime = clueHoldTime/3;
  console.log("clueHoldTime = " + clueHoldTime);
}

function loseGame(){
  stopGame();
  alert("You lost! It was a good attempt though, feel free to try again :)");
}

function winGame(){
  stopGame();
  alert("Congratulations, you won! Share this game with your friends and see if they can too :)");
}

function guess(btn) {
  console.log("User guessed: " + btn);
  if (!gamePlaying) {
    return;
  }
  if (btn != pattern[guessCounter]) {
    loseGame();
  } else if (btn == pattern[guessCounter]) {
    if (guessCounter == progress) {
      if (progress == pattern.length-1) {
        winGame();
      } else {
        progress++;
        playClueSequence();
      }
    } else {
      guessCounter++;
    }
  }
}   

function setDifficulty(btn) {
  if (btn == 1) {
    document.getElementById("easyBtn").classList.add("pressed");
    document.getElementById("medBtn").classList.remove("pressed");
    document.getElementById("hardBtn").classList.remove("pressed");
    console.log("easy")
    difficulty = "easy";
    pattern = [];
    for (var i=0;i<8;i++) {
      pattern[i] = Math.floor(Math.random() * 4) + 1;
    }
  }
  if (btn == 2) {
    document.getElementById("easyBtn").classList.remove("pressed");
    document.getElementById("medBtn").classList.add("pressed");
    document.getElementById("hardBtn").classList.remove("pressed");
    console.log("medium")
    difficulty = "medium";
    pattern = [];
    for (var i=0;i<12;i++) {
      pattern[i] = Math.floor(Math.random() * 4) + 1;
    }
  }
  if (btn == 3) {
    document.getElementById("easyBtn").classList.remove("pressed");
    document.getElementById("medBtn").classList.remove("pressed");
    document.getElementById("hardBtn").classList.add("pressed");
    console.log("hard")
    difficulty = "hard";
    pattern = [];
    for (var i=0;i<16;i++) {
      pattern[i] = Math.floor(Math.random() * 4) + 1;
    }
  }
}