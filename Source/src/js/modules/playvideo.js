export default class VideoPlayer {
  constructor(trigger, modalParent) {
    this.btns = document.querySelectorAll(trigger);
    this.videoWindow = document.querySelector(modalParent);
    this.closeTrigger = this.videoWindow.querySelector('.close');
  }

  close() {
    this.closeTrigger.addEventListener('click', () => {
      this.videoWindow.style.display = "none";
      this.player.stopVideo();
    });
  }

  play() {
    this.btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const path = btn.getAttribute('data-url');
        if (this.videoWindow.querySelector("iframe#player")) {
          this.videoWindow.style.display = "flex";
        } else {
          this.createPlayer(path);
        }
      });
    });

    this.close();
  }

  createPlayer(url) {
    try {
      this.player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: `${url}`
      });
    } catch (e) {}

    this.videoWindow.style.display = "flex";
  }

  init() {
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }
}