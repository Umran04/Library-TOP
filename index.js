const container = document.getElementById('container')
const addBook = document.getElementById('add-book-btn')
const cancelBtn = document.getElementById('cancel-btn')
const modal = document.getElementById('book-modal')
const form = document.getElementById('book-form')

let myLibrary = []

class Book {
    constructor(title, author, numberOfPages, read) {
      this.id = crypto.randomUUID();      
      this.title = title;
      this.author = author;
      this.numberOfPages = numberOfPages;
      this.read = read;          
    }
  
    toggleRead() {
      this.read = !this.read;
    }
  }

function addBookToLibrary(title,author,numberOfPages,read){
    const newBook = new Book(title,author,numberOfPages,read)
    myLibrary.push(newBook)
    
  }
  
addBookToLibrary('AOT', 'Isayama', 139, true)
addBookToLibrary('OP', 'Oda', 1150, true)
addBookToLibrary('JJK', 'Kishimoto', 250 , false)


function displayBooks(){
    container.innerHTML =''

    for(let i = 0; i < myLibrary.length; i++){

        const book = myLibrary[i]
        const card = document.createElement('div')
        card.classList.add('book-card')

        card.innerHTML = `
            <h3 class="book-info" >Book: ${book.title}</h3>
            <p class="book-info">Author: ${book.author}</p>
            <p class="book-info">Pages: ${book.numberOfPages}</p>
            <button class="remove">Remove</button>
            <button class="toggleBtn" id=${book.read ? 'read': 'not-read'}>${book.read ? 'Read': 'Not Read'}</button>`

            const toggleBtn = card.querySelector('.toggleBtn')
            toggleBtn.addEventListener('click', () => {
                book.toggleRead();
                displayBooks();
                
            })

            const removeBtn = card.querySelector('.remove')
            removeBtn.addEventListener('click', () =>{
                myLibrary = myLibrary.filter(b => b.id !== book.id)
                displayBooks();

            })            

     container.appendChild(card)
    }

    
}

addBook.addEventListener('click', () =>{
    modal.showModal();
})

cancelBtn.addEventListener('click', () =>{
    modal.close();
})


displayBooks();