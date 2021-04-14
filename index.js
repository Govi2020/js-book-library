// Import stylesheets
import "./style.css";

class Book {
  constructor(title, author, type) {
    this.title = title;
    this.author = author;
    this.type = type;
  }
}

class Display {
  add(book) {
    let uiString = `
        <tr>
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.type}</td>
        </tr>`;
    let tb = document.getElementById("tb");
    tb.innerHTML += uiString;
  }
  clear() {
    let form = document.getElementById("form");
    form.reset();
  }
  validate(book) {
    if (book.title.length < 2 || book.author.length < 2) {
      return false;
    } else {
      return true;
    }
  }
  show(type, showmessage) {
    console.log(type);
    let message = document.getElementById("message");
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
      <strong>Message:</strong> ${showmessage}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
    setTimeout(() => {
      message.innerHTML = "";
    }, 3000);
  }
}
let form = document.getElementById("form");
form.addEventListener("submit", e => {
  e.preventDefault();
  submit(e);
});
function submit(e) {
  let givenName = document.getElementById("book-name").value;
  let author = document.getElementById("author").value;
  let type;
  let programming = document.getElementById("programming");
  let friction = document.getElementById("friction");
  let cooking = document.getElementById("cooking");
  if (programming.checked) {
    type = programming.value;
  } else if (friction.checked) {
    type = friction.value;
  } else {
    type = cooking.value;
  }
  let book = new Book(givenName, author, type);
  let display = new Display();
  if (display.validate(book)) {
    display.clear();
    display.add(book);
    display.show("success", "Book Has Successfully Added");
  } else {
    display.show("danger", "Sorry Can't Add This Book");
  }
}

class Library {
  constructor(bookList) {
    this.bookList = bookList;
  }
}
