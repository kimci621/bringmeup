export default class Difference {
  constructor(oldContainer, newContainer, items, clickItem) {
    this.oldContainer = document.querySelector(oldContainer);
    this.newContainer = document.querySelector(newContainer);
    this.items = items;
    this.oldCounter = 0;
    this.newCounter = 0;
  }

  clickTriggers() {
    try {
      const addNew = (container, counter) => {
        const itemsLength = container.querySelectorAll(this.items).length;

        container.querySelectorAll(this.items)[itemsLength - 1].addEventListener('click', () => {
          container.querySelectorAll(this.items)[counter].classList.add("animated", "fadeInUp");
          container.querySelectorAll(this.items)[counter].style.display = "flex";
          if (counter < itemsLength) {
            counter++;
          }
          if (counter === itemsLength - 1) {
            container.querySelectorAll(this.items)[itemsLength - 1].style.display = "none";
          }
        });
      };

      addNew(this.oldContainer, this.newCounter);
      addNew(this.newContainer, this.oldCounter);
    }catch(e){}
  }

  hide() {
    try {
      const lastActive = (container) => {
        container.querySelectorAll(this.items).forEach((item, index, array) => {
          if (index !== array.length - 1) {
            item.classList.remove("animated", "fadeInUp");
            item.style.display = "none";
          }
        });
      };

      lastActive(this.oldContainer);
      lastActive(this.newContainer);
    } catch (e) {}
  }

  init() {
    this.hide();
    this.clickTriggers();
  }
}