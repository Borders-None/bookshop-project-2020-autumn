let books = [
  {
    id: 1,
    title: "The Great Gatsby",
    firstName: "Scott",
    lastName: "Fitzgerald",
  },
  {
    id: 2,
    title: "The Sound and the Fury",
    firstName: "William",
    lastName: "Faulkner",
  },
  {
    id: 3,
    title: "The Name of the Rose",
    firstName: "Umberto",
    lastName: "Eco",
  },
  { id: 4, title: "The Magic Mountain", firstName: "Thomas", lastName: "Mann" },
  {
    id: 5,
    title: "In Search of Lost Time",
    firstName: "Marcel",
    lastName: "Proust",
  },
  {
    id: 6,
    title: "To the Lighthouse",
    firstName: "Virginia",
    lastName: "Woolf",
  },
  {
    id: 7,
    title: "Nineteen Eighty-Four",
    firstName: "George",
    lastName: "Orwell",
  },
  {
    id: 8,
    title: "The Hound of the Baskervilles",
    firstName: "Arthur Conan",
    lastName: "Doyle",
  },
  { id: 9, title: "Ulysses", firstName: "James", lastName: "Joyce" },
  {
    id: 10,
    title: "The Little Prince",
    firstName: "Antoine",
    lastName: "de Saint-Exupéry",
  },
  {
    id: 11,
    title: "The Name of the Rose",
    firstName: "Umberto",
    lastName: "Eco",
  },
  {
    id: 12,
    title: "The War of the Worlds",
    firstName: "H.G.",
    lastName: "Wells",
  },
  {
    id: 13,
    title: "One Hundred Years of Solitude",
    firstName: "Gabriel",
    lastName: "García Márquez",
  },
  {
    id: 14,
    title: "Waiting for Godot",
    firstName: "Samuel",
    lastName: "Beckett",
  },
  {
    id: 15,
    title: "Gone with the Wind",
    firstName: "Margaret",
    lastName: "Mitchell",
  },
  { id: 16, title: "Friday", firstName: "Michel", lastName: "Tournier" },
];

let allBooks = document.querySelector(".books");
let bookText = document.querySelector("#book-text");

window.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    let bookDiv = "";
    books.forEach(function (book) {
      let title = `<div class = 'title'> ${book.title}</div> `;
      let author = `<div class = 'author'> ${book.firstName} ${book.lastName}</div> `;
      bookDiv += `<div class='book'> ${title} ${author} </div> `;
    });
    allBooks.innerHTML = bookDiv;
    bookText.innerHTML = "Book Are Loaded!";
    bookText.style.color = "green";
    setTimeout(() => {
      bookText.remove();
    }, 1000);
  }, 700);
});

/*  // Loading Books without a setTimeOut //
function getBooks() {
    let bookDiv = "";

    books.forEach(function (book) {
      let title = `<div class = 'title'> ${book.title}</div> `;
      let author = `<div class = 'author'> ${book.firstName} ${book.lastName}</div> `;
      bookDiv += `<div class='book'> ${title} ${author} </div> `;
      console.log(title);
      console.log(author);
      console.log(bookDiv);
    });

    allBooks.innerHTML = bookDiv;
  }
*/
