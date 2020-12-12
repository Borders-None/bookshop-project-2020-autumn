let currentUrl = new URL(location.href); // creating new url that contains current url
let searchParams = new URLSearchParams(currentUrl.search); //  searching in current  url params
let currentUrlId = searchParams.get("id"); //  getting current url id
window.addEventListener("DomContentLoaded", getBook());

function getBook() {
  fetch("https://bookshop-api.mirkwood.dev/books/")
    .then((res) => {
      return res.json();
    })

    .then((data) => {
      let main = document.querySelector("main"); // html main element
      let currentBook = "";
      data.forEach((book) => {
        let bookID = book.id; // getting id of every book

        // comparing every book's id with current  url id
        if (bookID == currentUrlId) {
          // Getting values of online API and adding them to the UI
          let title = ` <h2 class = 'title' > ${book.title} </h2>`;
          let author = `<h5 class = 'author'> By (author)  ${book.author.first_name} ${book.author.last_name}</h5> `;
          let bookYear = `<h5 class = 'book-year'> Originally published: ${book.year} </h5>`;
          let topic = `<h5 class = 'topic'> Topic: ${book.topics[0].name} </h5>`;
          let synopsis = `<p class = 'synopsis'> ${book.synopsis} </p> `;
          let bookPrice = `<h2> ${book.price} € </h2>`;
          let bookPurchaseH3 = `<h3> Free delivery worldwide</h3>`;
          let bookPurchaseP = `  <p> <i class="far fa-check-circle"></i> Available. Dispatched from Australia in 3  business  days. </p>`;
          let buttonBasket = `<button class = 'basket' > Add to basket </button>`;
          let buttonWish = `<button class = 'wishlist' > Add to wishlist </button>`;

          let bookInfoDiv = `<div class = 'book-info'> ${title} ${author} ${bookYear} ${topic} ${synopsis} </div>`;
          let bookCoverDiv = `<div class = 'book-cover-div'><img class = 'book-cover' src = ${book.cover_url}></div>`;
          let bookPurchase = `<div class = 'book-purchase'> ${bookPrice} ${bookPurchaseH3} ${bookPurchaseP} ${buttonBasket} ${buttonWish}</div>`;

          currentBook = `<div class = 'book'>${bookInfoDiv} ${bookCoverDiv}  ${bookPurchase}</div>`;
        }
      });

      main.innerHTML = currentBook;
    });
}
