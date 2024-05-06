const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readInput = document.querySelector("#read");
const addToLibrary = document.querySelector("#addToLibrary");
const divDeneme =  document.querySelector(".deneme");

const myLibrary = [];

function Book(title, author, pageNumbers, read) {
  (this.title = title),
    (this.author = author),
    (this.pageNumbers = pageNumbers),
    (this.read = read),
    (this.info = function () {
      return `${this.title} is written by ${this.author} has total pages of ${this.pageNumbers} and I did ${this.read} it`;
    });
}

function addBookToLibrary() {
  const newBook = new Book(
    titleInput.value,
    authorInput.value,
    pagesInput.value,
    readInput.value
  );
  return myLibrary.push(newBook);
}

addToLibrary.addEventListener("click", () => {
  addBookToLibrary();
});
