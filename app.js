// Fetching books on main html page //
let allBooks = document.querySelector('.books');

window.addEventListener('DOMContentLoaded', getBooks);
function getBooks() {
  fetch('https://bookshop-api.mirkwood.dev/books/')
    .then(function (re) {
      return re.json();
    })
    .then(function (data) {
      displayBooks(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function displayBooks(data) {
  let bookDiv = '';
  data.forEach((book) => {
    const title = `<a class = 'title' href= "books/book.html?id=${book.id}">  ${book.title}</a>  `;
    const author = `<div class = 'author'> ${book.author.first_name} ${book.author.last_name}</div> `;
    const bookCover = `<img class = 'book-cover' src = ${book.cover_url} >`;
    bookDiv += `<div class='book'> ${title} ${author} ${bookCover}   </div> `;
  });
  allBooks.innerHTML = bookDiv;
}

// Login Form popup
document.getElementById('btn-Form').addEventListener('click', openUserForm);
document
  .getElementById('popup-close-btn')
  .addEventListener('click', closeUserForm);
document
  .getElementById('popup-close-x')
  .addEventListener('click', closeUserForm);

function openUserForm() {
  document.getElementById('form-popup').style.display = 'block';
}
function closeUserForm() {
  document.getElementById('form-popup').style.display = 'none';
}

////////////////////////////////////////////////////////////////
//                        Login system
////////////////////////////////////////////////////////////////

// Validating the entered data and show User Name on top

document.getElementById('btn-submit').addEventListener('click', validate);

function validate(e) {
  e.preventDefault();
  // ELEMENTS variables for username and password
  let userName = document.getElementById('uname');
  let passWord = document.getElementById('psw');

  // VALUES variables for username and password
  let userNameValue = document.getElementById('uname').value;
  let passWordValue = document.getElementById('psw').value;

  // Error message using div#error-msg rather than using document.createElement('div');
  // I used an 20px-height div to avoid pushing the buttons after appending the error message.
  let divMsg = document.getElementById('error-msg');
  let msgText = document.createTextNode(
    'Please fill in both Username and Password fields'
  );
  divMsg.append(msgText);

  if (userNameValue == '' || passWordValue == '') {
    passWord.after(divMsg);
  } else {
    // store the input into Session Storage
    sessionStorage.setItem('username', userNameValue);
    sessionStorage.setItem('password', passWordValue);
    // control display of the USER NAME on top of screen
    let storedName = sessionStorage.getItem('username');
    document.getElementById('user-icon').style.visibility = 'visible';
    document.getElementById('user-show').style.visibility = 'visible';
    document.getElementById('user-show').innerHTML = storedName;
    document.getElementById('form-popup').style.display = 'none';
    // change the button from signin to signout
    document.getElementById('btn-Form').innerHTML = 'Sign Out';
  }

  setTimeout(() => {
    divMsg.innerText = '';
  }, 1000);
}
