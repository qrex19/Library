//book object constructor
//features of a book: bookname, authorName, numberofPages, bookId, issueStatus!

function bookObj(bookName, authorName, numberofPages, bookId) {
  (this.bookName = bookName),
    (this.authorName = authorName),
    (this.numberofPages = numberofPages),
    (this.bookId = bookId);
}

function createBox(book, author, page, bookid) {
  const box = document.querySelector(".box");
  const bookBox = document.createElement("div");
  const p = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  const p4 = document.createElement("p");
  const deleteContainer = document.createElement("div");
  deleteContainer.setAttribute("class", "delete-container");
  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "delete-button");
  deleteButton.innerText = "Delete";

  bookBox.append(deleteContainer);
  p.innerText = `Title: ${book}`;
  p2.innerText = `Author name: ${author}`;
  p3.innerText = `Number of Pages: ${page}`;
  p4.innerText = `Book ID: ${bookid}`;
  bookBox.append(p);
  bookBox.append(p2);
  bookBox.append(p3);
  bookBox.append(p4);
  deleteContainer.append(deleteButton);
  bookBox.append(deleteContainer);

  bookBox.setAttribute("class", "book-box");
  box.append(bookBox);
}

let bookArray = [];

//dom

const addButton = document.querySelector(".add");
const modal = document.querySelector(".modal");
const submitButton = document.querySelector(".save");

const name = document.querySelector(".name");
const authorName = document.querySelector(".author-name");
const numberOfPages = document.querySelector(".number-pages");
const id = document.querySelector(".book-id");

//for the book boxes

addButton.addEventListener("click", () => {
  modal.showModal();
});

submitButton.addEventListener("click", () => {
  //in case nothing is entered!
  if (
    name.value == "" &&
    authorName.value == "" &&
    numberOfPages.value == "" &&
    id.value == ""
  ) {
    console.log("nothing to store haha");
    modal.close();
    return;
  }

  bookArray.push(
    new bookObj(name.value, authorName.value, numberOfPages.value, id.value),
  );
  console.log(bookArray[bookArray.length - 1]);

  modal.close();

  createBox(name.value, authorName.value, numberOfPages.value, id.value); //div creator function

  name.value = "";
  authorName.value = "";
  numberOfPages.value = "";
  id.value = "";
});
