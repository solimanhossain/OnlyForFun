let form = document.querySelector('#book-form');
let booklist = document.querySelector('#book-list');
let localBooks = localStorage.getItem('books');

// Book Class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// Check Local
function getBooks() {
    let books = [];
    if(localBooks) books = JSON.parse(localBooks);
    return books;
}

// Add Book
function addToBooklist(book) {
    let list = document.querySelector('#book-list');
    let row = document.createElement('tr');
    row.innerHTML = `<td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href='#' class="delete">Delete</a></td>`;

    list.appendChild(row);
    
    document.querySelector("#title").value = '';
    document.querySelector("#author").value = '';
    document.querySelector("#isbn").value = '';
}

// Show Alert
function showAlert(message, className) {
    let div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    let container = document.querySelector('.container');
    let form = document.querySelector('#book-form');
    container.insertBefore(div, form);

    setTimeout(() => {
        document.querySelector('.alert').remove();
    }, 1500);
}

// Input check
function inputVarify() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let isbn = document.querySelector("#isbn").value;

    if (title === '' || author === '' || isbn === '') {
        showAlert("Please fill all the fields!", "error");
    } else {
        let book = new Book(title, author, isbn);
        addToBooklist(book);
        showAlert("Book Added!", "success");
        localStorage.setItem('books', JSON.stringify([...getBooks(), book]));
    }
}

// Delete Book
function deleteFromBook(target) {
    if (target.hasAttribute('href')) {
        target.parentElement.parentElement.remove();
        showAlert('Book Removed!', 'success');
    }
    let isbn = target.parentElement.previousElementSibling.textContent.trim()
    let books = getBooks();

    books.forEach((book, index) => {
        if(book.isbn === isbn) {
            books.splice(index, 1);
        }
    })

    localStorage.setItem('books', JSON.stringify(books));
}

// DOM Events
document.addEventListener('DOMContentLoaded', () =>{
    getBooks().forEach(element => {
        addToBooklist(element);
    });
});

// Form Events
form.addEventListener('submit', (event) => {
    event.preventDefault();
    inputVarify();
});

// Delete Events
booklist.addEventListener('click', (event) => {
    event.preventDefault();
    deleteFromBook(event.target);
});