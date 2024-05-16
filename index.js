const myLibrary = []
const addBook = document.querySelector(".addBook")
const addBookButton = document.querySelector(".addBookButton")
const displayForm = document.querySelector(".displayForm")
const table = document.querySelector(".table")
let bookIndex = 0
let i = 0


function books(index, title, author, pages, read) {
    this.index = index
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function addBookToLibrary (){

        const indexNumber = bookIndex++
        const titleAdded = document.getElementById("bookTitle").value
        const authorAdded = document.getElementById("author").value
        const pagesAdded = document.getElementById("pages").value
        const haveRead = document.getElementById("read").value
        let libraryAdd = new books(indexNumber, titleAdded, authorAdded, pagesAdded, haveRead)
        myLibrary.unshift(libraryAdd)
        //libraryTable(titleAdded, authorAdded, pagesAdded, haveRead)
        addToLibraryTable (libraryAdd)
}

let m = 0

function addToLibraryTable (bookToAdd) {

            
            
            let row = table.insertRow(1)
            let deleteBtn = document.createElement("Button")
            deleteBtn.className = "delete"
            deleteBtn.id = bookToAdd.index
            deleteBtn.textContent = "🚮"
            let readCheck = document.createElement("input")
            readCheck.id = bookToAdd.index
            readCheck.type = "checkbox"
                if(bookToAdd.read == "on") {
                    readCheck.checked = true
                }
            row.insertCell(0).innerText = bookToAdd.title
            row.insertCell(1).innerText = bookToAdd.author
            row.insertCell(2).innerText = bookToAdd.pages
            row.insertCell(3).appendChild(readCheck)
            row.insertCell(4).appendChild(deleteBtn)

            deleteBook(deleteBtn)
            changeArray(readCheck)
}

    
    
    function changeArray (changeCheck) {

        changeCheck.addEventListener("click", (event) => {

        })
    }




    addBook.addEventListener("click", (event) => {
        event.preventDefault();
        addBookToLibrary()
        const allInputs = document.querySelectorAll("input")
        allInputs.forEach(element => element.value = "")
        displayForm.close()
    });

  
    
    

    addBookButton.addEventListener("click", () => { 
      displayForm.showModal()
    });

    
    
    function deleteBook(deleted) {


    
    deleted.addEventListener("click", () => {

        deleted.closest("tr").remove()

        for (let j = 0; j < myLibrary.length; j++) {
            if (myLibrary[j].title == deleted.id) {
                myLibrary.splice(j, 1) 
            }

            
        }

    })



      

}
    
