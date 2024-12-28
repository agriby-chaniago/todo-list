import { useState } from "react";
import InputForm from "./components/InputForm";
import ToDoItem from "./components/ToDoItem";
import Footer from "./components/Footer";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div className='app'>
        <h1>To-Do List</h1>
        <InputForm addTodo={addTodo} />
        <ul>
          {todos.map((todo) => (
            <ToDoItem
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default App;
