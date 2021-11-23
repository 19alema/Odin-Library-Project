let myLibrary = [];
const modal = document.querySelector(".modal");
const book_submit = document.getElementById("submit_btn");
const modalInfor = document.querySelector(".modal-infor")
const booksContainer = document.querySelector('.booksContainer');
const addbookBtn = document.querySelector(".addbook");

const inputs = document.querySelectorAll("input");

const book_title = document.getElementById("title").value;
    const book_author = document.getElementById("author");
    const book_pages = document.getElementById("pages");
    const book_read = document.getElementById("read_checkbox");

// OPENING MODAL TO INPUT BOOK INFORMATION
addbookBtn.addEventListener("click", () => {
    modal.classList.add("open-modal");
})

// CLOOSING MODAL

book_submit.addEventListener("click", () => {
    modal.classList.remove("open-modal");
    inputs.forEach((e) => e.innerText = " ")
    addBookToLibrary();
    displayBook()
})

// GENERAL BOOK CLASS

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.infor = function () {
            return `${this.title} by ${this.author}, ${this.pages}pages, ${this.read}` 
        }
    }
}

function getBook() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read_checkbox");
    return new Book(title, author,pages, read)
}
function addBookToLibrary() {
    let newBook = getBook();
    myLibrary.push(newBook);
}


 
function displayBook() {
    for (let i = 0; i < myLibrary.length; i++) {
    
        // BOOK INFORMATION
        let bookCard = document.createElement("div")
        let bookTitle = document.createElement("h2");
        let bookauthor = document.createElement("h4");
        let bookPages = document.createElement("p");
        let readBtn = document.createElement("button");
        let removeBtn = document.createElement("button");
        bookCard.setAttribute('id',myLibrary.indexOf( myLibrary[i]));
        bookTitle.textContent = myLibrary[i].title;
        bookauthor.innerText = myLibrary[i].author;
        bookPages.innerText = ` ${myLibrary[i].pages} Pages`;

       if (myLibrary[i].read.checked == true) {
           readBtn.style.backgroundColor = "green";
           readBtn.textContent = "Book has been read";
           readBtn.style.color = "#fff";
       } else {
           readBtn.style.backgroundColor = "red";
           readBtn.innerText = 'Not Read';
           readBtn.style.color = "#fff";
        }
     
        removeBtn.innerText = "REMOVE";
        removeBtn.addEventListener("click", () => {
            removeBook
        })
        //  APPENDING THE BOOK INFOR TO BOOK
        
        bookCard.classList.add("bookCard")
        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookauthor);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(readBtn);
        bookCard.appendChild(removeBtn);
        booksContainer.appendChild(bookCard);
    }


}



