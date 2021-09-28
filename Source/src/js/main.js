import Slider from './modules/slider';
import VideoPlayer from './modules/playvideo';

window.addEventListener('DOMContentLoaded', () => {
  // main slider
  const slider = new Slider(".page", ".next");
  slider.render();
  // youtube api
  const videoPlayer = new VideoPlayer(".showup .play", ".overlay");
  videoPlayer.init();
  videoPlayer.play();

});