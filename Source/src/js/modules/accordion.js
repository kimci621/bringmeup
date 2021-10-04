export default class Accordion {
  constructor(btn, content) {
    this.btn = document.querySelectorAll(btn);
    this.content = document.querySelector(content);
  }

  realize() {
    this.btn.forEach((btn) => {
      btn.addEventListener('click', () => {
        let content = btn.closest('.module__info-show').nextElementSibling;
        if (content.style.display !== "block") {
          content.style.display = "block";
          content.classList.add("animated", "fadeInDown");
        } else {
          content.style.display = "none";
          content.classList.remove("fadeOutDown");
        }
      });
    });
  }

  init() {
    this.realize();
  }
}