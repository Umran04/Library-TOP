const container = document.getElementById('container')
const addBook = document.getElementById('add-book-btn')
const cancelBtn = document.getElementById('cancel-modal-btn')
const modal = document.getElementById('book-modal')
const form = document.getElementById('book-form')
const modalBook = document.getElementById('book')
const modalAuthor = document.getElementById('author')
const modalPgs = document.getElementById('pages')
const addModal = document.getElementById('add-modal-btn')
const mRead = document.getElementById('m-read')

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

let readStatus = false; 

mRead.addEventListener('click', () => {
  readStatus = !readStatus;
  mRead.textContent = readStatus ? 'Read' : 'Not Read';
  
  
  
});



addBook.addEventListener('click', () =>{
    modal.showModal();
})

form.addEventListener('submit', (event)=>{
  event.preventDefault();
  addBookToLibrary(modalBook.value, modalAuthor.value, modalPgs.value, readStatus)
  displayBooks();
  modal.close();
  readStatus = false
  mRead.textContent = 'Not Read'
  form.reset();
  
})



cancelBtn.addEventListener('click', () =>{
    form.reset();
    modal.close();
})


displayBooks();