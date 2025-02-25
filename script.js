let timer, isRunning = false, sessionCount = 0, streakCount = 0, timeLeft = 25 * 60;

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);

function updateTimerDisplay() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  document.getElementById("timer").textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateTimerDisplay();
      } else {
        clearInterval(timer);
        if ('vibrate' in navigator) {
          navigator.vibrate(1000);  
        }
        sessionCount++;
        streakCount++;
        document.getElementById("sessionCount").textContent = sessionCount;
        document.getElementById("streakCount").textContent = streakCount;
        getMotivationalQuote();
        timeLeft = 5 * 60;  
        startTimer();
      }
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  timeLeft = 25 * 60;
  updateTimerDisplay();
}

function playMusic(track) {
  let musicPlayer = document.getElementById("musicPlayer");
  let musicSource = document.getElementById("musicSource");

  // Replace these with your actual music file paths
  let musicTracks = {
    "music1": "1.mp3",
    "music2": "2.mp3",
    "music3": "3.mp3",
    "music4": "4.mp3",
    "music5": "11.mp3"
  };

  musicSource.src = musicTracks[track];
  musicPlayer.load();
  musicPlayer.play();
}

function stopMusic() {
  let musicPlayer = document.getElementById("musicPlayer");
  musicPlayer.pause();   
  musicPlayer.currentTime = 0;  
}
