const clock = document.getElementById("clock");
const alarmSound = document.getElementById("alarmSound");
const alarmStatus = document.getElementById("alarmStatus");

let alarmTime = null;
let alarmTimeout = null;

// Live Digital Clock
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    clock.innerText = `${hours}:${minutes}:${seconds}`;

    if (alarmTime === `${hours}:${minutes}`) {
        alarmSound.play();
        alarmStatus.innerText = "⏰ Alarm Ringing!";
    }
}

setInterval(updateClock, 1000);

// Set Alarm
function setAlarm() {
    const input = document.getElementById("alarmTime").value;

    if (!input) {
        alert("Please select a valid time!");
        return;
    }

    alarmTime = input;
    alarmStatus.innerText = "✅ Alarm set for " + alarmTime;
}

// Clear Alarm
function clearAlarm() {
    alarmTime = null;
    alarmSound.pause();
    alarmSound.currentTime = 0;
    alarmStatus.innerText = "❌ Alarm cleared";
}