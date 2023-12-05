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

function addBookToLibrary(title, author, numPages, genre) {
    newBook = new Book(title, author, numPages, genre);
    booksList.push(newBook);
};