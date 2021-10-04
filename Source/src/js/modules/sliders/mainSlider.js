import Slider from "./slider";

export default class MainSlider extends Slider {
  constructor(container, btns) {
    super(container, btns);
  }

  showSlide(index) {
    try {
      if (index > this.slides.length) {
        this.slideIndex = 1;
      }
      if (index < 1) {
        this.slideIndex = this.slides.length;
      }

      this.slides.forEach(slide => {
        slide.style.display = "none";
      });

      this.slides[this.slideIndex - 1].style.display = "block";

    } catch (e) {}
    try {
      this.hiddenBlock();
    } catch (e) {}
  }

  nextSlide(n) {
    this.showSlide(this.slideIndex = this.slideIndex + n);
    // this.animate(this.slideIndex - 1);
  }

  prevSlide(n) {
    this.showSlide(this.slideIndex = this.slideIndex - n);
    // this.animate(this.slideIndex - 1);
  }

  animate(i) {
    this.slides.forEach(slide => {
      slide.classList.remove("animated", "fadeIn");
    });
    this.slides[i].classList.add("animated", "fadeIn");
  }

  hiddenBlock() {
    const block = document.querySelector('.hanson');
    block.classList.add("animated");
    block.style.opacity = "0";
    if (this.slideIndex == 3) {
      setTimeout(() => {
        block.classList.add("fadeIn");
        block.style.opacity = "1";
      }, 3000);
    } else {
      block.classList.remove("fadeIn");
    }
  }

  moduleSlider() {
    try {
      document.querySelectorAll('.prevmodule').forEach(item => {
        item.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          this.prevSlide(1);
        });
      });

      document.querySelectorAll('.nextmodule').forEach(item => {
        item.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          this.nextSlide(1);
        });
      });
    } catch (e) {}
  }

  render() {
    try {

      this.buttons.forEach(btn => {
        btn.addEventListener('click', () => {
          this.nextSlide(1);
        });

        btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
          e.preventDefault();
          this.slideIndex = 1;
          this.showSlide(this.slideIndex);
        });
      });

      this.showSlide(this.slideIndex);
      this.moduleSlider();
    } catch (e) {}
  }
}