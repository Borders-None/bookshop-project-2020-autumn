// Fetching books on main html page //
let allBooks = document.querySelector(".books");

window.addEventListener("DOMContentLoaded", getBooks);
function getBooks() {
  fetch("https://bookshop-api.mirkwood.dev/books/")
    .then(function (re) {
      return re.json();
    })
    .then(function (data) {
      return displayBooks(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function displayBooks(data) {
  let bookDiv = "";
  data.forEach((book) => {
    let title = `<a class = 'title' href= "books/book.html?id=${book.id}">  ${book.title}</a>  `;

    let author = `<div class = 'author'> ${book.author.first_name} ${book.author.last_name}</div> `;
    let bookCover = `<img class = 'book-cover' src = ${book.cover_url} >`;
    bookDiv += `<div class='book'> ${title} ${author} ${bookCover}   </div> `;
  });
  allBooks.innerHTML = bookDiv;
}
