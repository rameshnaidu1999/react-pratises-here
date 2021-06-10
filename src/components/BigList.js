import { useState } from "react"

function BigList(){
  const [items, setItems] = useState([])
  const [item, setItem] = useState("")

  function handleSubmit(e){
    e.preventDefault()

    const newItem = {
      id: new Date().getTime(),
      name: item
    }
    
    setItems([...items].concat(newItem))
    setItem("")
    console.log(items)
  }
  return(
    <div>
      <form onSubmit={handleSubmit}>
      <input type="text" value={item} onChange={(e) => setItem(e.target.value)} />
      <button type="submit">add items</button>
      </form>

      {
        items.sort((a,b) => {
          var nameA = a.name.toUpperCase()
          var nameB = b.name.toUpperCase()

          if(nameA > nameB){
            return 1
          } return -1
        }
        ).map((item) => (
          <p key={item.id}>{item.name}</p>
        ))}
    </div>
  )
}

export default BigList