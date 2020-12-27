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
    let authorFullName = book.author.first_name + " " + book.author.last_name;
    let authorInUrl = authorFullName.replace(/\s+/g, "-");
    let bookInUrl = book.title.replace(/\s+/g, "-").trim();
    let title = `<a class = 'title' href= "books/book-details.html?id=${book.id}__${authorInUrl}__${bookInUrl}">${book.title}</a>  `;
    let author = `<div class = 'author'> ${authorFullName}</div> `;
    let bookCover = `<img class = 'book-cover' src = ${book.cover_url}>`;
    bookDiv += `<div class='book'> ${title} ${author} ${bookCover}   </div> `;
  });
  allBooks.innerHTML = bookDiv;
}

// function displayBooks(data) {
//   let bookDiv = "";
//   data.forEach((book) => {
//     const title = `<a class = 'title' href= "books/book.html?id=${book.id}">  ${book.title}</a>  `;
//     const author = `<div class = 'author'> ${book.author.first_name} ${book.author.last_name}</div> `;
//     const bookCover = `<img class = 'book-cover' src = ${book.cover_url} >`;
//     bookDiv += `<div class='book'> ${title} ${author} ${bookCover}   </div> `;
//   });
//   allBooks.innerHTML = bookDiv;
// }

// Login Form popup
document.getElementById("btn-Form").addEventListener("click", openUserForm);
document.getElementById("btn-close").addEventListener("click", closeUserForm);
function openUserForm() {
  document.getElementById("userForm").style.display = "block";
}
function closeUserForm() {
  document.getElementById("userForm").style.display = "none";
}
