// Validating the entered data and show User Name on top
document.getElementById('btn-login-submit').addEventListener('click', validate);

function validate(e) {
  e.preventDefault();
  // Input Elements
  // I changed naming convention as per Josip advice:
  // "variable name should express the content of the variable, and be clear to other team members"
  let usernameInput = document.getElementById('username');
  let passwordInput = document.getElementById('password');

  // Values from Input Elements
  let usernameValue = document.getElementById('username').value;
  let passwordValue = document.getElementById('password').value;

  // Error message using div#error-msg rather than using document.createElement('div');
  // I used an 20px-height div to avoid pushing the buttons after appending the error message.
  let errorMsgDiv = document.getElementById('error-msg');

  if (usernameValue == '' || passwordValue == '') {
    let errorMsgNode = document.createTextNode(
      'Please fill in both USERNAME and PASSWORD fields'
    );
    errorMsgDiv.append(errorMsgNode);
    passwordInput.after(errorMsgDiv);
    setTimeout(() => {
      errorMsgDiv.innerText = '';
    }, 1000);
  } else {
    // store the input into Session Storage
    sessionStorage.setItem('sessionUsername', usernameValue);
    sessionStorage.setItem('sessionPassword', passwordValue);
    window.open('../login/login.html', '_self');
  }
}
