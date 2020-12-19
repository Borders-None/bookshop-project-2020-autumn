// Fetching books on main html page //
let allBooks = document.querySelector(".books");

window.addEventListener("DOMContentLoaded", getBooks);
function getBooks() {
  fetch("https://bookshop-api.mirkwood.dev/books/")
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
  let bookDiv = "";
  data.forEach((book) => {
    const title = `<a class = 'title' href= "books/book.html?id=${book.id}">  ${book.title}</a>  `;

    const author = `<div class = 'author'> ${book.author.first_name} ${book.author.last_name}</div> `;
    const bookCover = `<img class = 'book-cover' src = ${book.cover_url} >`;
    bookDiv += `<div class='book'> ${title} ${author} ${bookCover}   </div> `;
  });
  allBooks.innerHTML = bookDiv;
}

function checkingUsernameSessionValue() {
  let usernameSessionValue = sessionStorage.getItem("username");
  let loginBtn = document.querySelector(".login-btn");
  let username = document.querySelector(".username");
  let signOutBtn = document.querySelector(".sign-out");
  if (usernameSessionValue) {
    username.style.display = "block";
    username.innerHTML = usernameSessionValue + '<i class="fas fa-user"></i>';
    loginBtn.style.display = "none";
    signOutBtn.style.display = "block";
  }
  signOutBtn.addEventListener("click", signOut);
  function signOut() {
    window.open("index.html", "_self");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("password");
  }
}

checkingUsernameSessionValue();
