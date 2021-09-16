const saveToLocalStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));
const getFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

//id is optional, Used because to remove a book we need an id
class Book {
  constructor(title, author, id = undefined){
   this.title = title;
   this.author = author;
   if(id !== undefined){
     this.id = id;
   }
  }

  getCode() {
    return `<div>${this.title}</div>
              <div>${this.author}</div>
              <button class='remove' data-id='${this.id}'>Remove</button>
              <hr>`;
  }
  
  //For every book you  need it own code. For all static methods. You can call without the need to instatiate the object
  static add(book){
    let bookItems = this.getAllBooks();
    let id = 1;
    if (bookItems.length > 0) {
      id = bookItems[bookItems.length - 1].id + 1;
    }
    book.id = id;
    bookItems.push(book);
    saveToLocalStorage('bookItems', bookItems);
  }

  static remove(id){
    let bookItems = this.getAllBooks();
    bookItems = bookItems.filter((b) => b.id !== Number(id));
    saveToLocalStorage('bookItems', bookItems);
  }

  static getAllBooks(){
    let bookItems = getFromLocalStorage('bookItems');
    if(bookItems === null){
      bookItems = [];
    }
    return bookItems;
  }
}