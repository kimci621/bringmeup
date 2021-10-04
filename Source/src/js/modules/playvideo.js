export default class VideoPlayer {
  constructor(trigger, modalParent) {
    this.btns = document.querySelectorAll(trigger);
    this.videoWindow = document.querySelector(modalParent);
    this.closeTrigger = this.videoWindow.querySelector('.close');
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
  }

  close() {
    this.closeTrigger.addEventListener('click', () => {
      this.videoWindow.style.display = "none";
      try {
        this.player.stopVideo();
      } catch (e) {}
    });
  }

  play() {
    this.btns.forEach((btn, index) => {

      try {
        if (index % 2 === 0) {
          btn.closest('.module__video-item').nextElementSibling.setAttribute('data-vision', 'false');
        }

      } catch (e) {}
      btn.addEventListener('click', () => {
        if (!btn.closest('.module__video-item') ||
          btn.closest('.module__video-item').getAttribute('data-vision') !== "false") {
          this.activeBtn = btn;

          if (this.videoWindow.querySelector("iframe#player")) {
            this.videoWindow.style.display = "flex";

            if (this.path !== btn.getAttribute('data-url')) {
              this.path = btn.getAttribute('data-url');
              console.log(this.path);
              this.player.cueVideoById({
                videoId: this.path
              });
            }
          } else {
            this.path = btn.getAttribute('data-url');
            this.createPlayer(this.path);
          }
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
        videoId: `${url}`,
        events: {
          'onStateChange': this.onPlayerStateChange
        }
      });
    } catch (e) {}

    this.videoWindow.style.display = "flex";
  }

  onPlayerStateChange(state) {
    const blockedVideoParent = this.activeBtn.closest('.module__video-item').nextElementSibling;
    const playSvg = this.activeBtn.querySelector('svg').cloneNode(true);
    // 0 - воспроизведение видео завершено
    try {
      if (state.data === 0) {
        if (blockedVideoParent.querySelector('.play__circle').classList.contains('closed')) {
          blockedVideoParent.querySelector('.play__circle').classList.remove('closed');
          blockedVideoParent.querySelector('svg').remove();
          blockedVideoParent.querySelector('.play__circle').appendChild(playSvg);
          blockedVideoParent.querySelector('.play__text').textContent = 'play video';
          if (blockedVideoParent.querySelector('.play__text').classList.contains('attention')) {
            blockedVideoParent.querySelector('.play__text').classList.remove('attention');
          }
          blockedVideoParent.style.filter = "none";
          blockedVideoParent.style.opacity = 1;

          blockedVideoParent.setAttribute('data-vision', 'true');
        }
      }
    } catch (e) {}
  }

  init() {
    if (this.btns.length > 0) {
      const tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      this.play();
    }
  }
}