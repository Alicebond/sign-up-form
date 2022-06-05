"use strict";
function init () {
  let btnEl = document.getElementById('create-account');
  let emailEl = document.getElementById('email');

  // emailEl.addEventListener('input', () => {
  //   emailEl.
  // })

  btnEl.addEventListener('click', validatePwd)

  function validatePwd() {
    let pwdEl = document.getElementById('pwd');
    let secPwdEl = document.getElementById('cfm');

    let pwd = pwdEl.value;
    let secPwd = secPwdEl.value;
    if (!(pwd || secPwd)) return;
    for (let i = 0; i < pwd.length; i++) {
      if (!(pwd[i] === secPwd[i])) {
        pwdEl.classList.add('not-match', 'error');
        secPwdEl.classList.add('error');
      } else {
        pwdEl.classList.remove('not-match', 'error');
        secPwdEl.classList.remove('error');
      }
    }
  }
}

init();

