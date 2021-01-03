///////////////////////////////////
// Session
// control display of the USER NAME on top of screen
let storedName = sessionStorage.getItem('sessionUsername');

if (storedName) {
  document.getElementById('user-icon').style.visibility = 'visible';
  document.getElementById('user-show').style.visibility = 'visible';
  document.getElementById('user-show').innerHTML = storedName;
  // change the button from signin to signout
  let btnSignOut = document.getElementById('btn-signout');
  btnSignOut.style.display = 'block';

  let btnSignIn = document.getElementById('btn-signin');
  btnSignIn.style.display = 'none';

  // Event listener to sign out
  btnSignOut.addEventListener('click', resetUser);
  function resetUser() {
    sessionStorage.removeItem('sessionUsername');
    sessionStorage.removeItem('sessionPassword');
    btnSignOut.style.visibility = 'hidden';
    window.open('../index.html', '_self');
  }
} else {
  document.getElementById('user-icon').style.visibility = 'hidden';
  document.getElementById('user-show').style.visibility = 'hidden';
  document.getElementById('user-show').innerHTML = '';
}
