//book object constructor
function bookObj(name, id) {
  this.name = name;
  this.id = id;
}

let bookArray = [];

//dom

const addButton = document.querySelector(".add");
const modal = document.querySelector(".modal");
const submitButton = document.querySelector(".save");

const name = document.querySelector(".name");
const id = document.querySelector(".id");

addButton.addEventListener("click", () => {
  modal.showModal();
});

submitButton.addEventListener("click", () => {
  bookArray.push(new bookObj(name.value, id.value));
  console.log(bookArray[bookArray.length - 1]);

  modal.close();
  name.value = "";
  id.value = "";
});

//object constructor
