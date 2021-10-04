import Slider from "./slider";

export default class MiniSlider extends Slider {
  constructor(container, next, prev, activeClass, animate, autoPlay) {
    super(container, next, prev, activeClass, animate, autoPlay);
  }

  triggers() {

    this.next.addEventListener('click', () => {
      if (this.container.classList.contains("feed__slider")) {
        this.nextSlidewithBtn();
      } else {
        this.nextSlide();
      }
    });

    this.prev.addEventListener('click', () => {
      this.prevSlide();
    });
  }

  nextSlide() {
    this.container.appendChild(this.slides[0]);
    this.decorSliders();
  }

  nextSlidewithBtn() {
    if (this.slides[5].tagName == "BUTTON") {
      this.container.appendChild(this.slides[5]);
    } else {
      this.container.insertBefore(this.slides[0], this.slides[6]);
      this.decorSliders();
    }
  }

  prevSlide() {
    for (let i = this.slides.length - 1; i > 0; i--) {
      if (this.slides[i].tagName !== "BUTTON") {
        let lastSlide = this.slides[i];
        this.container.insertBefore(lastSlide, this.slides[0]);
        this.decorSliders();
        break;
      }
    }
  }

  decorSliders() {
    this.slides.forEach(item => {
      if (item.classList.contains(this.activeClass)) {
        item.classList.remove(this.activeClass);
        if (this.animations === true) {
          item.querySelector('.card__title').style.opacity = "0.4";
          item.querySelector('.card__controls-arrow').style.opacity = "0";
        }
      }
    });

    if (!this.slides[0].closest('button')) {
      this.slides[0].classList.add(this.activeClass);
    }

    if (this.animations === true) {
      this.slides[0].querySelector('.card__title').style.opacity = "1";
      this.slides[0].querySelector('.card__controls-arrow').style.opacity = "1";
    }
  }

  init() {
    try {
      this.container.style.cssText = `
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      align-items: flex-start;
    `;
      this.triggers();
      this.decorSliders();

      let event = new Event("click");

      if (this.autoPlay == true) {
        setInterval(() => {
          this.next.dispatchEvent(event);
        }, 5000);
      }
    } catch (e) {}
  }
}