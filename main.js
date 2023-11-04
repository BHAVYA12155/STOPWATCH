var timerDisplay = document.getElementById('timer-display');
var startButton = document.getElementById('start-button');
var stopButton = document.getElementById('stop-button');
var resetButton = document.getElementById('reset-button');

let intervalId;
let startTime;

startButton.addEventListener('click', () => {
 
  startTime = Date.now();
  intervalId = setInterval(() => {
    var elapsedTime = Date.now() - startTime;
    var seconds = Math.floor(elapsedTime / 1000);
    var milliseconds = elapsedTime % 1000;
    var timeString = `${seconds}:${milliseconds.toString().padStart(3, '0')}`;
    timerDisplay.textContent = timeString;
  }, 10);

  
  startButton.disabled = true;
  stopButton.disabled = false;
});

stopButton.addEventListener('click', () => {
 

  
clearInterval(intervalId);

  
  startButton.disabled = false;
  stopButton.disabled = true;
});

resetButton.addEventListener('click', () => {
 
  startTime = undefined;
  timerDisplay.textContent = '00:00:00';

  
  startButton.disabled = false;
  stopButton.disabled = true;
});