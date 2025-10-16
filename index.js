const container = document.getElementById('container')

const myLibrary = []

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
addBookToLibrary('JJK', 'Kishimoto', 250 , true)
addBookToLibrary('AOT', 'Isayama', 139, true)
addBookToLibrary('OP', 'Oda', 1150, true)
addBookToLibrary('JJK', 'Kishimoto', 250 , true)
addBookToLibrary('AOT', 'Isayama', 139, true)
addBookToLibrary('OP', 'Oda', 1150, true)
addBookToLibrary('JJK', 'Kishimoto', 250 , true)
addBookToLibrary('AOT', 'Isayama', 139, true)
addBookToLibrary('OP', 'Oda', 1150, true)
addBookToLibrary('JJK', 'Kishimoto', 250 , true)

function displayBooks(){

    for(let i = 0; i < myLibrary.length; i++){

        const book = myLibrary[i]
        const card = document.createElement('div')
        card.classList.add('book-card')

        card.innerHTML = 
        `
            <h3>Name: ${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pg No: ${book.numberOfPages}</p>
            <button>Remove</button>
            <button>${book.read ? 'Read': 'Not Read'}</button>

        `
     container.appendChild(card)
    }

    
}

displayBooks();