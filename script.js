const saveToLocalStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));
const getFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

function codeForSingleBook(book){
    return `<div>${book.title}</div>
            <div>${book.author}</div>
            <button class="remove" data-id="${book.id}">Remove</button>
            <hr>`;
}

var titleInput = document.getElementById("title");
var authorInput = document.getElementById("author");

document
  .getElementById("book-list")
  .addEventListener("submit", function(event){
    event.preventDefault();
    var bookItems = getFromLocalStorage("bookItems");
    if(bookItems == null){
    bookItems = [];
    }
    var title = titleInput.value.trim();
    var author = authorInput.value.trim();
    var id = 1;
    if(bookItems.length > 0){
        id = bookItems[bookItems.length - 1].id + 1;
    }
    if(!title || !author){
      return;
    }
    bookItems.push({
      id: id,  
      title: title,
      author: author
    });
    saveToLocalStorage("bookItems", bookItems);
  });  
