import PropTypes from "prop-types";

export default function ToDoItem({ todo, toggleComplete, deleteTodo }) {
  ToDoItem.propTypes = {
    todo: PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired,
    toggleComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  };
  return (
    <li className='todo-item'>
      <span
        onClick={() => toggleComplete(todo.id)}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {todo.text}
      </span>
      <button
        onClick={() => {
          deleteTodo(todo.id);
        }}
      >
        Hapus
      </button>
    </li>
  );
}