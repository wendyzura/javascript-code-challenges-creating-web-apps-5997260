const timerDisplay = document.getElementById("timer");

let workDuration = 0.10 * 60; // seconds
let timerLeft = workDuration;
let timer = null;

function updateTimerDisplay() {
  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  timerDisplay.textContent = '${minutes}:${seconds}';
}

function startTimer() {
  timer  = setInterval(() => {
    if(timeLeft > 0) {
      timeLeft--;
      updateTimerDisplay();
    } else {
    clearInterval(timer);
    timer = null;
    updateTimerDisplay();
    startTimer();
    }
  }, 1000);  
}

startTimer();