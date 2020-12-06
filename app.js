let allBooks = document.querySelector('.books');

document.getElementById('btn').addEventListener('click' , getBooks);


function getBooks(){
    // using Fetch 
    fetch('books.json')
    .then(function(re){
        return re.json();
    })

    .then(function(books){

        let bookDiv = '';
        let title = '';
        let author = '';

        books.forEach(function(book){
          console.log(books);
        bookDiv += `<div class='book'> ${title} ${author} </div> `;
        title = `<div class = 'title'> ${book.title}</div> ` ;
        author = `<div class = 'author'> ${book.author.firstName} ${book.author.lastName}</div> ` ;  
        })
        
        allBooks.innerHTML = bookDiv; 
        

      })
        .catch(function(err){
          console.log(err);
       });  
   
}
