const saveToLocalStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));
const getFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

function displayBooks(){
  var bookItems = getFromLocalStorage('bookItems');

  if (bookItems == null) {
  bookItems = [];
  }

  var booksCode = bookItems.map(book => codeForSingleBook(book));
  document.getElementById('items').innerHTML = booksCode.join('');

  var removeButtons = document.querySelectorAll('.remove');
  for (let i=0; i<removeButtons.length; i++){
      removeButtons[i].addEventListener('click', function(event){
          let id = event.target.getAttribute('data-id');
          bookItems = bookItems.filter(b => b.id !== Number(id));
          saveToLocalStorage('bookItems', bookItems);
          displayBooks();
      });
  }
}

displayBooks();

function codeForSingleBook(book){
    return `<div>${book.title}</div>
            <div>${book.author}</div>
            <button class='remove' data-id='${book.id}'>Remove</button>
            <hr>`;
}

const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
document
  .getElementById('book-list')
  .addEventListener('submit', (event) => {
    event.preventDefault();
    let bookItems = getFromLocalStorage('bookItems');
    if (bookItems == null) {
      bookItems = [];
    }
    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    let id = 1;
    if (bookItems.length > 0) {
      id = bookItems[bookItems.length - 1].id + 1;
    }
    if (!title || !author) {
      return;
    }
    bookItems.push({
      id,
      title,
      author,
    });
    saveToLocalStorage('bookItems', bookItems);
    displayBooks();
  });  
