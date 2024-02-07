import { useState } from 'react'

import './App.css'


  function App() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
  
    function addingToDo() {
      if (newTodo.trim() !== "") {
        setTodos([...todos, { text: newTodo.trim(), checked: false }]);
        setNewTodo("");
      }
    }
  
    function handleDisplayToDo(index) {
      const updatedTodos = [...todos];
      updatedTodos[index].checked = !updatedTodos[index].checked;
      setTodos(updatedTodos);
    }
  
    return (
      <>
        <h1>Add a task to do</h1>
        <input type="text" value={newTodo} onChange={(e) => { setNewTodo(e.target.value) }} />
        <button onClick={addingToDo}>Add a To-Do task!</button>
  
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <input type="checkbox" checked={todo.checked} onChange={() => handleDisplayToDo(index)} />
              <span>{todo.text}</span>
            </li>
          ))}
        </ul>
      </>
    );
  }


export default App
