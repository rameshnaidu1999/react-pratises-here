import { useEffect, useState } from "react";


export default function List() {

  const [todos,setTodos] = useState([]);

  const [todo, setTodo] = useState("");

  const [todoEditing, setTodoEditing] = useState(null)

  const [editingText, setEdititngText] = useState("")


  useEffect(() => {

    const modern = localStorage.getItem("my-list");

    const loadedTodos = JSON.parse(modern)


    if(loadedTodos){

      setTodos(loadedTodos)

    }


  }, [])


  useEffect(() => {

    const tempJson = JSON.stringify(todos)

    localStorage.setItem("my-list", tempJson)

  }, [todos])


  const handleSubmit = (e) => {

    e.preventDefault();

    

    const newTodo = {

      id: new Date().getTime(),

      text: todo,

      completed: false

    }


    setTodos([...todos].concat(newTodo))

    setTodo("")  

  }

  function deleteTodo(id){

    const updatedTodos = [...todos].filter((todo) => todo.id !== id)

    setTodos(updatedTodos)

  }


  function toggleComplete(id){

    const updatedTodos = [...todos].map((todo) => {

      if(todo.id === id){

        todo.completed = !todo.completed

      } return todo

    })

    setTodos(updatedTodos)

  }

  function editTodo(id){

    const updatedTodos = [...todos].map((todo) => {

      if(todo.id === id){

        todo.text = editingText

      }

      return todo

    })

    setTodos(updatedTodos)

    setTodoEditing(null)

    setEdititngText("")

  }

  return (

    <div className="App">

      <form onSubmit={handleSubmit}>

        <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />

        <button type="submit">add to list</button>

      </form>

      { todos.map((todo) => <div key={todo.id}>

        {todoEditing === todo.id ? (

          <input type="text" onChange={(e) => setEdititngText(e.target.value)}

          value={editingText} 

          />

        ) : (<div>{todo.text}</div>)}

        <button onClick={(e) => deleteTodo(todo.id)}>delete</button>


        <input type="checkbox" onChange={() => toggleComplete(todo.id)} checked={todo.completed} />

        {

          todoEditing === todo.id ? (<button onClick={()=> editTodo(todo.id)}>submit edit</button>) : (<button onClick={() => setTodoEditing(todo.id)}>edit button</button>)

        }

        

        

      </div> )}

    </div>

  );

}
