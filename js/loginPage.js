document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#to_send');
  const form = document.querySelector('#form-loginPage');

  btn.addEventListener('click', () => {
    const validationPopup = new JustValidate('#form-loginPage');
    validationPopup
      .addField('#login', [
        {
          rule: 'required',
          errorMessage: 'Вы не ввели логин',
        },
      ])
      .addField('#password', [
        {
          rule: 'required',
          errorMessage: 'Вы не ввели пароль',
        },
        {
          rule: 'password',
          errorMessage: 'Пароль должен содержать буквы и цифры, минимум 8 символов',
        },
      ])
      .revalidate().then((isValid) => {
        if (isValid) {
          form.submit();
        }
      });
  });
});

const control = document.querySelector('.password-control');
const input = document.querySelector('.password-input');

control.addEventListener('click', () => {
  if (input.getAttribute('type') === 'password') {
    control.classList.add('no-view');
    input.setAttribute('type', 'text');
  } else {
    control.classList.remove('no-view');
    input.setAttribute('type', 'password');
  }
});
