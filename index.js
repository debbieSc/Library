function books(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read
}
}

const IT = new books("IT", "Stephen King", 345, "read")

IT.info();

console.log(Object.getPrototypeOf(IT) === books.prototype);

console.log(IT.valueOf());