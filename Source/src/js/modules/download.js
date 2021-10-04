export default class Download {
  constructor(selector) {
    this.selector = document.querySelectorAll(selector);
    this.path = "assets/img/mainbg.jpg";
  }
  download(path) {
    let link = document.createElement('a');
    link.setAttribute("href", path);
    link.setAttribute("download", "some_pic");
    document.body.appendChild(link);
    link.style.display = "none";
    link.click();
    link.remove();
  }

  init() {
    this.selector.forEach(selector => {
      selector.addEventListener('click', (e) => {
        this.download(this.path);
      });
    });
  }
}