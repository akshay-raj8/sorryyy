const audio = document.querySelector("#bg-music");
const musicButton = document.querySelector(".music-toggle");
if (audio && musicButton) {
  musicButton.addEventListener("click", async () => {
    if (audio.paused) {
      try {
        await audio.play();
        musicButton.classList.add("is-playing");
        musicButton.setAttribute("aria-pressed", "true");
        musicButton.textContent = "Pause";
      } catch {
        musicButton.textContent = "Tap again";
      }
    } else {
      audio.pause();
      musicButton.classList.remove("is-playing");
      musicButton.setAttribute("aria-pressed", "false");
      musicButton.textContent = "Play music";
    }
  });
}