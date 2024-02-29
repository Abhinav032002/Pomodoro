const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEL = document.getElementById("timer");

let interval;
let timeLeft = 1500;

function UpdatedTime() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formattedTime = `${minutes.toString().padStart(2, "0")} : ${seconds
    .toString()
    .padStart(2, "0")}`;
  timerEL.innerHTML = formattedTime;
}

function startTimer() {
  interval = setInterval(() => {
    timeLeft--;
    UpdatedTime();
    if (timeLeft === 0) {
      clearInterval(interval);
      alert("Time for a break");
      timeLeft === 1500;
    }
  }, 1000);
}
function stopTimer() {
  clearInterval(interval);
  UpdatedTime();
}
function resetTimer() {
  clearInterval(interval);
  timeLeft = 1500;
  UpdatedTime();
}

startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);
