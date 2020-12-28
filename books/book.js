let currentUrl = new URL(location.href); // creating new url that contains current url
let searchParams = new URLSearchParams(currentUrl.search); //  searching in current  url params
let bookId = searchParams.get("id"); //  getting current url id// Fetching book when page is loaded
window.addEventListener("DomContentLoaded", getBook());

function getBook() {
  fetch(`https://bookshop-api.mirkwood.dev/books/${bookId}`)
    .then((res) => {
      return res.json();
    })

    .then((book) => {
      displayBook(book);
    });
}

function displayBook(book) {
  let main = document.querySelector("main"); // html main element
  let currentBook = "";

  // Getting values of online API and adding them to the UI
  const title = ` <h2 class = 'title' > ${book.title} </h2>`;
  const author = `<h5 class = 'author'> By:  ${book.author.first_name} ${book.author.last_name}</h5> `;
  const bookYear = `<h5 class = 'book-year'> Originally published: ${book.year} </h5>`;
  const topic = `<h5 class = 'topic'> Topic: ${book.topics[0].name} </h5>`;
  const synopsis = `<p class = 'synopsis'> ${book.synopsis} </p> `;
  const bookPrice = `<h2> ${book.price} € </h2>`;
  const bookPurchaseH3 = `<h3> Free delivery worldwide</h3>`;
  const bookPurchaseP = `  <p> <i class="far fa-check-circle"></i> Available. Dispatched from Australia in 3  business  days. </p>`;
  const buttonBuy = `<button class= 'buy'> Buy Now </button>`;
  const buttonBasket = `<button class = 'basket' > Add to basket </button>`;
  const buttonWish = `<button class = 'wishlist' > Add to wishlist </button>`;
  const bookInfoDiv = `<div class = 'book-info'> ${title} ${author} ${bookYear} ${topic} ${synopsis} </div>`;
  const bookCoverDiv = `<div class = 'book-cover-div'><img class = 'book-cover' src = ${book.cover_url}></div>`;
  const bookPurchase = `<div class = 'book-purchase'> ${bookPrice} ${bookPurchaseH3} ${bookPurchaseP} ${buttonBuy} ${buttonBasket} ${buttonWish}</div>`;
  currentBook = `<div class = 'book'>${bookInfoDiv} ${bookCoverDiv}  ${bookPurchase}</div>`;

  main.innerHTML = currentBook;
  document.title = book.title + " - " + "CWB - Books for all!";
}
