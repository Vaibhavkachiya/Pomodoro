let timer, isRunning = false, sessionCount = 0, streakCount = 0, timeLeft = 25 * 60;
let musicPlayer = document.getElementById("musicPlayer");
let musicSource = document.getElementById("musicSource");

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
        handleSessionEnd();
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

function handleSessionEnd() {
  if ('vibrate' in navigator) {
    navigator.vibrate(1000);
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
  let musicTracks = {
    "music1": "1.mp3",
    "music2": "2.mp3",
    "music3": "3.mp3",
    "music4": "4.mp3",
    "music5": "5.mp3",
    "music6": "11.mp3"
  };

  musicSource.src = musicTracks[track];
  musicPlayer.load();
  musicPlayer.play();

  musicPlayer.onended = function () {
    let nextTrack = getNextTrack(track);
    if (nextTrack) {
      playMusic(nextTrack);
    } else {
       
      playMusic("music1");
    }
  };
}

function getNextTrack(currentTrack) {
  const tracks = ["music1", "music2", "music3", "music4", "music5", "music6"];
  let currentIndex = tracks.indexOf(currentTrack);
  if (currentIndex === -1 || currentIndex === tracks.length - 1) {
    return null;   
  }
  return tracks[currentIndex + 1];   
}

function stopMusic() {
  musicPlayer.pause();
  musicPlayer.currentTime = 0;
}

function testVibration() {
  if ('vibrate' in navigator) {
    navigator.vibrate(1000);
  } else {
    alert("Vibration is not supported on this device.");
  }
}
