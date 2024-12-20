const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readInput = document.getElementsByName("read")
const addButton = document.querySelector("#addButton");
const showButton = document.querySelector("#showButton");
const container = document.querySelector(".container-show");

class Book{
  constructor(title, author, pageNumbers, read) {
    this.title = title;
    this.author =author;
    this.pageNumbers = pageNumbers;
    this.read = this.checkInput(read);
  }

  get id() {
    return this.title + this.pageNumbers;
  }

  get info(){
    return `${this.title} is written by ${this.author} has total pages of ${this.pageNumbers} and I did ${this.read} it`;
  }

  checkInput(read) {
    return read[0].checked ? "read" : "not read";
  }
}

class Library{
  constructor(){
    this.books = []
  }

  addBook(book){
    this.books.push(book)
  }

  removeBook(id){
    this.books = this.books.filter(book => book.id !== id)
  }

  getBooks(){
    return this.books
  }
}

class UI {
  constructor(container, library){
    this.container = container;
    this.library = library
  }

  listOfBooks(){
    this.removeList();

    this.library.getBooks().forEach(book => {
      const usersBox = document.createElement("div");
      const deleteButton = document.createElement("button");
      const authorText = document.createElement("p");
      const headerText = document.createElement("h1");
      const pageNumbersText = document.createElement("p");
      const readText = document.createElement("p");
      const infoText = document.createElement("p");
      const readButton = document.createElement("button");

      authorText.innerText = `${book.author}`;
      headerText.innerText = `${book.title}`;
      pageNumbersText.innerText = `${book.pageNumbers}`;
      readText.innerText = `${book.read}`;
      infoText.innerText = `${book.info}`;
      deleteButton.innerText = "Delete";
      deleteButton.dataset.id = book.id;
      readButton.innerText = "Read/Not Read";

      usersBox.appendChild(headerText);
      usersBox.appendChild(authorText);
      usersBox.appendChild(pageNumbersText);
      usersBox.appendChild(readText);
      usersBox.appendChild(readButton);
      usersBox.appendChild(infoText);
      usersBox.appendChild(deleteButton);

      this.container.appendChild(usersBox);

      readButton.addEventListener("click", () => {
        if (readText.innerText === "read") {
          book.read = "not read";
        } else {
          book.read = "read";
        }
        readText.innerText = book.read;
        infoText.innerText = book.info;
      });

      deleteButton.addEventListener("click", () => {
        this.library.removeBook(book.id);
        this.container.removeChild(usersBox)
      })
    });
  }

  removeList(){
    while (this.container.firstChild) {
      this.container.removeChild(this.container.firstChild);
    }
  }
}

const myLibrary = new Library();
const uiLibrary = new UI(container, myLibrary)


addButton.addEventListener("click", (e) => {
  if (
    titleInput.value === "" ||
    authorInput.value === "" ||
    pagesInput.value === ""
  ) return;
  
  const newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, readInput)
  myLibrary.addBook(newBook);

  uiLibrary.listOfBooks();

  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readInput.value = "";
  e.preventDefault();
});

showButton.addEventListener("click", () => {
  container.classList.toggle("container-show");
});