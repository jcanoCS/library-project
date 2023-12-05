function Book(title, author, numPages, genre, isRead=false) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.genre = genre;
    this.isRead = isRead;
}

Book.prototype.getInfo = function() {
    let readStatus = this.isRead ? 'reading completed.' : 'not read yet.';
    return `${this.title}, by ${this.author}, ${this.numPages} pages, ${this.genre}, ${readStatus}`
};

