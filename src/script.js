//book object constructor
//features of a book: bookname, authorName, numberofPages, bookId, issueStatus!

function bookObj(bookName, authorName, numberofPages, bookId) {
  (this.bookName = bookName),
    (this.authorName = authorName),
    (this.numberofPages = numberofPages),
    (this.bookId = bookId);
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

addButton.addEventListener("click", () => {
  modal.showModal();
});

submitButton.addEventListener("click", () => {

  //in case nothing is entered!
  if(name.value == "" && authorName.value == "" && numberOfPages.value == "" && id.value == "") {
    console.log("nothing to store haha");
    modal.close();
    return;
  }

  bookArray.push(
    new bookObj(name.value, authorName.value, numberOfPages.value, id.value),
  );
  console.log(bookArray[bookArray.length - 1]);

  modal.close();
  name.value = "";
  authorName.value = "";
  numberOfPages.value = "";
  id.value = "";
});

//object constructor
