
function displayBooks() {
  let bookItems = Book.getAllBooks();

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
    let bookItems = Book.getAllBooks();
    const title = titleInput.value.trim();
    const author = authorInput.value.trim();


    if (!title || !author) {
      return;
    }

    let book = new Book(title, author);
    Book.add(book);
    displayBooks();
  });
