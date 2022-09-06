import React from 'react';
// import './App.css';

function App() {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      text: todo
    }
    setTodos([...todos].concat(newTodo));
    setTodo("");
  }
   return (
    <div className="App" >
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          />
        <button type='submit'>Add item</button>
      </form>
    </div>
  );
}

export default App;
