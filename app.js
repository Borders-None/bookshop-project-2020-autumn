// Fetching books on main html page //
let allBooks = document.querySelector(".books");
window.addEventListener("DOMContentLoaded", getBooks);
function getBooks() {
  fetch("https://bookshop-api.mirkwood.dev/books/")
    .then(function (re) {
      return re.json();
    })
    .then(function (data) {
      let bookDiv = "";
      data.forEach(function (book) {
        let title = `<div class = 'title'>  ${book.title}</div>  `;
        let author = `<div class = 'author'> ${book.author.first_name} ${book.author.last_name}</div> `;
        let bookCover = `<img class = 'book-cover' src = ${book.cover_url} >`;
        bookDiv += `<div class='book'> ${title} ${author} ${bookCover}  </div> `;
      });
      allBooks.innerHTML = bookDiv;
    })

    .catch(function (err) {
      console.log(err);
    });
}
