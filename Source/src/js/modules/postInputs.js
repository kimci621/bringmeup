import IMask from 'imask';

export default class PostInputs {
  constructor(forms) {
    this.forms = document.querySelectorAll(forms);
    this.inputs = document.querySelectorAll('input');
    this.mailInputs = document.querySelectorAll('[type="email"]');
    this.status = {
      ok: "Your data was submitted!",
      loading: "Waiting for sending...",
      fail: "Error, something was wrong..."
    };
  }

  checkEn(mailInputs) {
    mailInputs.forEach(input => {
      input.addEventListener('keypress', (e) => {
        if (e.key.match(/[^a-z 0-9 @ \.]/ig)) {
          e.preventDefault();
        }
      });
    });
  }

  clearInpits() {
    this.inputs.forEach(input => {
      input.value = "";
    });
  }

  mask() {
    const phoneMask = IMask(
      document.getElementById('phone'), {
        mask: '+{1}(000)000-0000'
      });
  }

  postData() {
    this.forms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        let status = document.createElement('div');
        status.style.cssText = `
          margin-top: 20px;
          color: #fff;
          font-size: 22px;
          font-family: Mark;
        `;
        form.parentNode.appendChild(status);
        status.textContent = this.status.loading;

        let formData = new FormData(form);

        fetch("assets/question.php", {
            method: "POST",
            body: formData
          })
          .then(resp => {
            if (resp.ok) {
              status.textContent = this.status.ok;
              return resp.text();
            }
            if (!resp.ok) {
              status.textContent = this.status.fail;
              return resp.text();
            }
          })
          .catch(() => {
            status.textContent = this.status.fail;
          })
          .finally(() => {
            this.clearInpits();
            setTimeout(() => {
              status.textContent = "";
            }, 4000);
          });
      });
    });
  }

  init() {
    this.postData();
    this.checkEn(this.mailInputs);
    this.mask();
  }
}