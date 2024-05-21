const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readInput = document.getElementsByName("read")
const addToLibrary = document.querySelector("#addToLibrary");
const showLibrary = document.querySelector("#showLibrary");
const container = document.querySelector(".container-show");


let myLibrary = [];

function Book(title, author, pageNumbers, read) {
  (this.title = title),
    (this.author = author),
    (this.pageNumbers = pageNumbers),
    (this.read = read),
    (this.info = function () {
      return `${this.title} is written by ${this.author} has total pages of ${this.pageNumbers} and I did ${this.read} it`;
    });
  this.id = title + pageNumbers;
}

function checkInput() {
  for (var i = 0, length = readInput.length; i < length; i++) {
    if (readInput[i].checked) {
      return readInput[i].value
    }
  }
}


function addBookToLibrary() {
  const newBook = new Book(
    titleInput.value,
    authorInput.value,
    pagesInput.value,
    checkInput()
  );
  return myLibrary.push(newBook);
}

addToLibrary.addEventListener("click", (e) => {
  if (
    titleInput.value === "" ||
    authorInput.value === "" ||
    pagesInput.value === "" ||
    read.value === ""
  ) {
    return;
  }
  addBookToLibrary();
  removeList();
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readInput.value = "";
  listOfBooks();
  e.preventDefault();
});

function listOfBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    const usersBox = document.createElement("div");
    const deleteButton = document.createElement("button");
    const authorText = document.createElement("p");
    const headerText = document.createElement("h1");
    const pageNumbersText = document.createElement("p");
    const readText = document.createElement("p");
    const infoText = document.createElement("p");
    const readButton = document.createElement("button")

    authorText.innerText = `${myLibrary[i].author}`;
    headerText.innerText = `${myLibrary[i].title}`;
    pageNumbersText.innerText = `${myLibrary[i].pageNumbers}`;
    readText.innerText = `${myLibrary[i].read}`;
    infoText.innerText = `${myLibrary[i].info()}`;
    deleteButton.innerText = "Delete";
    deleteButton.dataset.id = `${myLibrary[i].id}`;
    readButton.innerText = "Read/Not Read"

    usersBox.appendChild(headerText);
    usersBox.appendChild(authorText);
    usersBox.appendChild(pageNumbersText);
    usersBox.appendChild(readText);
    usersBox.appendChild(readButton);
    usersBox.appendChild(infoText);
    usersBox.appendChild(deleteButton);

    container.appendChild(usersBox);

    readButton.addEventListener("click", () => {
      if(readText.innerText === "read") {
        myLibrary[i].read = "not read";
        readText.innerText = "not read";
        return infoText.innerText = `${myLibrary[i].info()}`;
      } else {
        myLibrary[i].read = "read";
        readText.innerText = "read";
        return infoText.innerText = `${myLibrary[i].info()}`;
      }
    })

    deleteButton.addEventListener("click", () => {
      let ArrayId = deleteButton.getAttribute("data-id");
      if (ArrayId === myLibrary[i].id) {
        container.removeChild(usersBox)
        myLibrary = myLibrary.filter(users => users.id !== myLibrary[i].id)
      }
    });
  }
}

showLibrary.addEventListener("click", () => {
  container.classList.toggle("container-show");
});

function removeList() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

listOfBooks();
