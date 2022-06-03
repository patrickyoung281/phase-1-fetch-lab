


function fetchBooks () {

  fetch ("https://anapioficeandfire.com/api/books")
    .then ((resp) => resp.json())
    .then(function renderBooks(data) {

    }) 
}





















/*

function fetchBooks () {
  fetch("https://anapioficeandfire.com/api/books")
  .then ((resp) => resp.json())
  .then (function (data) {
    renderBooks (data)
  })
}


function renderBooks (books) {
  const makeList = document.querySelector("main");
  makeList
}




*/











/*

function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
  .then ((resp) => resp.json())
  .then (function (data) {
    renderBooks(data)
  })
}

fetchBooks();
  // To pass the tests, don't forget to return your fetch!
  


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

*/
