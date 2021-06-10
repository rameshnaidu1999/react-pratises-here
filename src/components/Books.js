import { useState } from "react"

function Books(){
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState("")
  function handleSubmit(e){
    e.preventDefault();

    const newBook = {
      value: new Date().getTime(),
      text: book,
    }
    setBooks([...books].concat(newBook))
    setBook("")
    console.log(books);
    
    // const sortedBooks = {
    //   books.sort(function(a,b){
    //     return a.value -b.value;
    //   })
    // }
  }
  return(
    <div>
      books here
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={book} 
          onChange={(e)=> setBook(e.target.value)} 
        />
        <br />
        <button type="submit"> add my my book list </button>
      </form>
      {
        books.sort((a,b) => a.value > b.value ? -1 : 1 ).map(
          (book, key)=> (
            <p key={key}>{book.text}</p>
          )
        )
      }
    </div>
  )
}

export default Books