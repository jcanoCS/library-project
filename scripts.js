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



// Function to add a book to library. The parameter is a book
// object. Alternatively, in the comments is the code to add
// a book by having the book's info in the parameters
// function addBookToLibrary(title, author, numPages, genre) {
//     newBook = new Book(title, author, numPages, genre);
//     booksList.push(newBook);
// };
function addBookToLibrary(book) {
    booksList.push(book);
};


// Function to display entire library
// Will iterate through each book in the book array and display it's info
function displayAllBooks() {
    booksList.forEach(function(book) {
        console.log(book.getInfo());
    });
};