// Book Constructor
function Book(title, author, numPages, genre, isRead=false) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.genre = genre;
    this.isRead = isRead;
}

// Adding a prototype function for every Book instance to display info
Book.prototype.getInfo = function() {
    let readStatus = this.isRead ? 'reading completed.' : 'not read yet.';
    return `${this.title}, by ${this.author}, ${this.numPages} pages, ${this.genre}, ${readStatus}`
};


// Array to store Book instances
const booksList = [];
const bookObjectsMap = new Map();



// Function to add a book to library. The parameter is a book
// object. Alternatively, in the comments is the code to add
// a book by having the book's info in the parameters
// function addBookToLibrary(title, author, numPages, genre) {
//     newBook = new Book(title, author, numPages, genre);
//     booksList.push(newBook);
// };
function addBookToLibrary(book, card) {
    booksList.push(book);
    bookObjectsMap.set(card, book);
};

function addBookCardToPage(book) {
    // Reference to place in page where book cards will be displayed
    const pageBookCardContainer = document.getElementById('book-library');
    const new_card = document.createElement('div');
    new_card.classList.add('card');
    new_card.textContent = book.getInfo();
    book.isRead ? new_card.classList.add('bookIsReadDisplay') : new_card.classList.add('bookIsNotReadDisplay');


    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons-container');
    const removeButton = document.createElement('button');
    removeButton.classList.add('remove');
    removeButton.textContent = 'Remove';
    const readButton = document.createElement('button');
    readButton.classList.add('readStatus');
    readButton.textContent = 'Change Read Status';
    enableCardButtons(new_card, readButton, removeButton);
    buttonsContainer.appendChild(readButton);
    buttonsContainer.appendChild(removeButton);
    new_card.appendChild(buttonsContainer);
    
    
    pageBookCardContainer.appendChild(new_card);
    return new_card;
};


// Function to display entire library
// Will iterate through each book in the book array and display it's info
function displayAllBooks() {
    booksList.forEach(function(book) {
        addBookCardToPage(book);
    });
};

function clearFormInput() {
    let inputs = document.querySelectorAll("input");
    inputs.forEach((input) => (input.value = ''));
}

function enableCardButtons(bookCard, readButton, removeButton) {
    readButton.onclick = function(){changeReadStatus(bookCard);};
    removeButton.onclick = function(){removeCard(bookCard);};
}

function removeCard(bookCard) {
    bookCard.remove();
    bookObjectsMap.delete(bookCard);
}

function changeReadStatus(bookCard) {
    let book = bookObjectsMap.get(bookCard);
    if (book.isRead) {
        bookCard.classList.remove('bookIsReadDisplay');
        bookCard.classList.add('bookIsNotReadDisplay');
    }
    else {
        bookCard.classList.remove('bookIsNotReadDisplay');
        bookCard.classList.add('bookIsReadDisplay');
    }
    book.isRead = !book.isRead;
}


// Adding reference to the book form when submitting book information
const bookForm = document.getElementById('book-form');

bookForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let formData = new FormData(bookForm);
    let title = formData.get('title');
    let author = formData.get('author');
    let numPages = formData.get('numPages');
    let genre = formData.get('genre');
    let bookWasRead = document.getElementById('isRead').checked;
    const newBook = new Book(title, author, numPages, genre, bookWasRead);
    let newCard = addBookCardToPage(newBook);
    addBookToLibrary(newBook, newCard);
    clearFormInput();
});

