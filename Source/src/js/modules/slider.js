export default class Slider {
  constructor(page, buttons) {
    this.page = document.querySelector(page);
    this.slides = this.page.children;
    this.buttons = document.querySelectorAll(buttons);
    this.slideIndex = 1;
  }

  showSlide(index) {
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

    try {
      this.hiddenBlock();
    } catch (e) {}
  }

  nextSlide(n) {
    this.showSlide(this.slideIndex = this.slideIndex + n);
    this.animate(this.slideIndex - 1);
  }

  prevSlide(n) {
    this.showSlide(this.slideIndex = this.slideIndex - n);
    this.animate(this.slideIndex);
  }

  animate(i) {
    this.slides.forEach(slide => {
      slide.classList.remove("animated", "fadeInUp");
    });
    this.slides[i].classList.add("animated", "fadeInUp");
  }

  hiddenBlock() {
    const block = document.querySelector('.hanson');
    block.classList.add("animated");
    block.style.opacity = "0";
    if (this.slideIndex == 3) {
      setTimeout(() => {
        block.classList.add("fadeInUp");
        block.style.opacity = "1";
      }, 3000);
    }else{
      block.classList.remove("fadeInUp");
    }
  }

  render() {
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
  }
}