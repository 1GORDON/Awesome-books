import Book from './Book';

function displayBooks() {
  const bookItems = Book.getAllBooks();

  const booksCode = bookItems.map((book) => new Book(book.title, book.author, book.id).getCode());
  document.getElementById('items').innerHTML = booksCode.join('');

  const removeButtons = Array.from(document.querySelectorAll('.remove'));
  removeButtons.forEach((removeButton) => {
    removeButton.addEventListener('click', (event) => {
      const id = event.target.getAttribute('data-id');
      Book.remove(id);
      displayBooks();
    });
  });
}

displayBooks();

const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
document
  .getElementById('book-list')
  .addEventListener('submit', (event) => {
    event.preventDefault();
    const bookItems = Book.getAllBooks();
    const title = titleInput.value.trim();
    const author = authorInput.value.trim();

    if (!title || !author) {
      return;
    }

    const book = new Book(title, author);
    Book.add(book);
    displayBooks();
  });

const listElement = document.getElementById('id-list');
const formElement = document.getElementById('book-new');
const contactElement = document.getElementById('id-contact');
const listBody = document.querySelector('.header-container');
const formBody = document.querySelector('.the-form');
const contactBody = document.querySelector('.contact-class');

listElement.addEventListener('click', (event) => {
  listBody.style.display = 'block';
  formBody.style.display = 'none';
  contactBody.style.display = 'none';
});

formElement.addEventListener('click', (event) => {
  formBody.style.display = 'block';
  listBody.style.display = 'none';
  contactBody.style.display = 'none';
});

contactElement.addEventListener('click', (event) => {
  contactBody.style.display = 'flex';
  listBody.style.display = 'none';
  formBody.style.display = 'none';
});

/* global luxon, luxon */
window.addEventListener('load', () => {
  const { DateTime } = luxon;
  this.today = DateTime.now();
  document.getElementById('times').textContent = this.today.toLocaleString(DateTime.DATETIME_MED);
});