import MainSlider from './modules/sliders/mainSlider';
import VideoPlayer from './modules/playvideo';
import MiniSlider from './modules/sliders/miniSlider';
import Difference from './modules/difference';
import PostInputs from './modules/postInputs';

window.addEventListener('DOMContentLoaded', () => {
  //click case
  new Difference('.officerold', '.officernew', '.officer__card-item').init();
  // main slider
  const slider = new MainSlider({
    container: ".page",
    buttons: ".next"
  });
  slider.render();
  // module slider
  const moduleSlider = new MainSlider({
    container: ".moduleapp",
    buttons: ".next"
  });
  moduleSlider.render();
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
  // youtube api on main page
  new VideoPlayer(".play__circle", ".overlay").init();
  // youtube api on modules page
  new VideoPlayer(".module__video-item .play", ".overlay").init();
  //inputs validation
  try {
    const form = new PostInputs('.form');
    form.init();
  } catch (e) {}
});