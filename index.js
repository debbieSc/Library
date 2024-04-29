const myLibrary = []
const addBook = document.querySelector(".addBook")

function books(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}


function addBookToLibrary (){
    
        const titleAdded = document.getElementById("bookTitle").value
        const authorAdded = document.getElementById("author").value
        const pagesAdded = document.getElementById("pages").value
    
        let libraryAdd = new books(titleAdded, authorAdded, pagesAdded, "yes")

    
        myLibrary.push(libraryAdd)
    
}





    addBook.addEventListener("click", (event) => {
        event.preventDefault();
        
        addBookToLibrary()
        document.querySelector(".displayForm").style.display = "none"
    
    });

  
    const addBookButton = document.querySelector(".addBookButton")
    

    addBookButton.addEventListener("click", () => {
        
      document.querySelector(".displayForm").style.display = "block"
        console.log("hello")
    
    });