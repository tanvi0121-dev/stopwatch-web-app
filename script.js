let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById("time");
let timer = null;

function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  displayTime.innerText = `${h}:${m}:${s}`;
}

function start() {
  if (timer === null) {
    timer = setInterval(updateTime, 1000);
  }
}

function pause() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  clearInterval(timer);
  timer = null;
  [seconds, minutes, hours] = [0, 0, 0];
  displayTime.innerText = "00:00:00";
  document.getElementById("laps").innerHTML = "";
}

function lap() {
  const lapTime = displayTime.innerText;
  const lapList = document.getElementById("laps");
  const li = document.createElement("li");
  li.innerText = "Lap: " + lapTime;
  lapList.appendChild(li);
}
