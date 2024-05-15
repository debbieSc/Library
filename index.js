const myLibrary = []
const addBook = document.querySelector(".addBook")
const addBookButton = document.querySelector(".addBookButton")
const displayForm = document.querySelector(".displayForm")
const table = document.querySelector(".table")
let i = 1



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
        libraryTable(titleAdded, authorAdded, pagesAdded)
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

    

    function libraryTable(titleTotable, authorToTable, pagesToTable) {    
        let row = table.insertRow(1)
        row.id = i++
        let deleteBtn = document.createElement("Button")
        deleteBtn.className = "delete"
        deleteBtn.id = titleTotable
        deleteBtn.textContent = "🚮"
        let readCheck = document.createElement("input")
        readCheck.id = titleTotable
        readCheck.type = "checkbox"
        row.insertCell(0).innerText = titleTotable
        row.insertCell(1).innerText = authorToTable
        row.insertCell(2).innerText = pagesToTable
        row.insertCell(3).appendChild(readCheck)
        row.insertCell(4).appendChild(deleteBtn)

        deleteBook(deleteBtn)
    }

    
    function deleteBook(deleted) {


    
    deleted.addEventListener("click", () => {

        deleted.closest("tr").remove()

        for (let i = 0; i < myLibrary.length; i++) {
            if (myLibrary[i].title == deleted.id) {
                myLibrary.splice(i, 1) 
            }

            
        }

    })



      

}
    
