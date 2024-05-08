const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readInput = document.querySelector("#read");
const addToLibrary = document.querySelector("#addToLibrary");
const showLibrary = document.querySelector("#showLibrary");

const divDeneme = document.querySelector(".deneme");

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
    readInput.value,
    
  );
  return myLibrary.push(newBook);
}

addToLibrary.addEventListener("click", (e) => {
  addBookToLibrary();
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readInput.value = "";
  e.preventDefault();
});

showLibrary.addEventListener("click", () => {
  showList();
});



function showList() {
  for (let key in myLibrary) {
    let divCard = document.createElement("div");
    divDeneme.appendChild(divCard);
    let titleH = document.createElement("h1");
    titleH.textContent = myLibrary[key].title;
    divCard.appendChild(titleH);
    let authortext = document.createElement("p");
    authortext.textContent = myLibrary[key].author;
    divCard.appendChild(authortext);
    let pageNumbersText = document.createElement("p");
    pageNumbersText.textContent = myLibrary[key].pageNumbers;
    divCard.appendChild(pageNumbersText);
    let readText = document.createElement("p");
    readText.textContent = myLibrary[key].read;
    divCard.appendChild(readText);
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    divCard.appendChild(deleteButton);
  }
}



 