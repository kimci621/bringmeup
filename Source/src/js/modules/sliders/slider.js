export default class Slider {
  constructor({
    container = null,
    buttons = null,
    next = null,
    prev = null,
    activeClass = "",
    animations = false,
    autoPlay = false
  } = {}) {
    this.container = document.querySelector(container);
    this.buttons = document.querySelectorAll(buttons);
    this.prev = document.querySelector(prev);
    this.next = document.querySelector(next);
    this.activeClass = activeClass;
    this.animations = animations;
    this.autoPlay = autoPlay;
    this.slideIndex = 1;
    try{this.slides = this.container.children;}catch(e){}
  }

}