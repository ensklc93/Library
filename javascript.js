const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readInput = document.querySelector("#read");
const addToLibrary = document.querySelector("#addToLibrary");
const showLibrary = document.querySelector("#showLibrary");
const container = document.querySelector(".container");

const myLibrary = [
  new Book("Lotr", "J.R.R. Tolkien", 567, "not read"),
  new Book("Dice", "Adam Flawes", 546, "read"),
  new Book("Dice", "Adam Flawes", 546, "read"),
];

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

addToLibrary.addEventListener("click", (e) => {
  deneme();
  listOfBooks();
  addBookToLibrary();
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readInput.value = "";
  e.preventDefault();
});

function listOfBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    const usersBox = document.createElement("div");
  
    const authorText = document.createElement("p");
    const headerText = document.createElement("h1");
    const pageNumbersText = document.createElement("p");
    const readText = document.createElement("p");
    const infoText = document.createElement("p");

    authorText.innerText = `${myLibrary[i].author}`;
    headerText.innerText = `${myLibrary[i].title}`;
    pageNumbersText.innerText = `${myLibrary[i].pageNumbers}`;
    readText.innerText = `${myLibrary[i].read}`;
    infoText.innerText = `${myLibrary[i].info()}`;

    usersBox.appendChild(headerText);
    usersBox.appendChild(authorText);
    usersBox.appendChild(pageNumbersText);
    usersBox.appendChild(readText);
    usersBox.appendChild(infoText);

    container.appendChild(usersBox);
  }

  showLibrary.addEventListener("click", () => {
   container.classList.toggle('container-show')
  });
}

function deneme() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}
