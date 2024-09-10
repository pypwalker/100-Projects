// Create Template Variables
const INTERVAL_MS = 1000 / 60;
let timerID;
let lastTimerStartTime = 0;
let millisElapsedBeforeLastStart = 0;

// Get Our Data From The DOM
const timer = document.getElementById('timer')
const startButton = document.getElementById('start-button')
const stopButton = document.getElementById('stop-button')
const resetButton = document.getElementById('reset-button')

//Use Events
startButton.addEventListener('click', startTimer)
stopButton.addEventListener('click', stopTimer)
resetButton.addEventListener('click', resetTimer)

// ---------Creating Functions------

// 1. startTimer
function startTimer() {
    startButton.disable = true;
    stopButton.disable = false;
    resetButton.disable = true;

    lastTimerStartTime = Date.now();
    timerID = setInterval(updateTimer, INTERVAL_MS)
}
// 2. stopTimer
function stopTimer() {
    startButton.disable = false;
    stopButton.disable = true;
    resetButton.disable = false;

    millisElapsedBeforeLastStart += Date.now() - lastTimerStartTime
    clearInterval(timerID);
}
// 3. resetTimer
function resetTimer() {
    resetButton.disable = true;
    timer.textContent = "00:00:00";
    millisElapsedBeforeLastStart = 0;
}
// 4. updateTimer
function updateTimer() {
    const millisElapsed = Date.now() - lastTimerStartTime + millisElapsedBeforeLastStart;
    const secondsElapsed = millisElapsed / 1000;
    const minutesElapsed = secondsElapsed / 60;

    const milisText = formatNumber(millisElapsed % 1000, 3)
    const secondsText = formatNumber(Math.floor(secondsElapsed) % 60, 2);
    const minutesText = formatNumber(Math.floor(minutesElapsed), 2);
    timer.textContent = `${minutesText}:${secondsText}:${milisText}`
}
// 5. formatNumber
function formatNumber(number, desiredLength) {
    const stringNumber = String(number)
    if (stringNumber.length > desiredLength) {
        return stringNumber.slice(0, desiredLength)
    }

    return stringNumber.padStart(desiredLength, "0")
}