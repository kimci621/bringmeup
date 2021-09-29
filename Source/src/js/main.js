import MainSlider from './modules/sliders/mainSlider';
import VideoPlayer from './modules/playvideo';
import MiniSlider from './modules/sliders/miniSlider';
import Difference from './modules/difference';
import PostInputs from './modules/postInputs';

window.addEventListener('DOMContentLoaded', () => {
  //click case
  const clickPage = new Difference('.officerold', '.officernew', '.officer__card-item');
  clickPage.init();
  // main slider
  const slider = new MainSlider({
    container: ".page",
    buttons: ".next"
  });
  slider.render();
  //mini Sliders
  const showupSlider = new MiniSlider({
    container: ".showup__content-slider",
    next: ".showup__next",
    prev: ".showup__prev",
    activeClass: "card-active",
    animations: true,
    autoPlay: true
  });
  showupSlider.init();
  // -*-*-*-
  const modulesSlider = new MiniSlider({
    container: ".modules__content-slider",
    next: ".modules__info-btns .slick-next",
    prev: ".modules__info-btns .slick-prev",
    activeClass: "card-active",
    animations: true,
    autoPlay: true
  });
  modulesSlider.init();
  // -*-*-*-
  const feedSlider = new MiniSlider({
    container: ".feed__slider",
    next: ".feed__slider .slick-next",
    prev: ".feed__slider .slick-prev",
    activeClass: "feed__item-active",
  });
  feedSlider.init();
  // youtube api
  const videoPlayer = new VideoPlayer(".showup .play", ".overlay");
  videoPlayer.init();
  videoPlayer.play();
  //inputs validation
  const form = new PostInputs('.form');
  form.init();
});