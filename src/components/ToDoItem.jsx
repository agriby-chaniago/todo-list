import PropTypes from "prop-types";
import { Toaster, toast } from "sonner";

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

  const handleDelete = () => {
    if (window.confirm("Apakah Anda yakin ingin menghapusnya?")) {
      deleteTodo(todo.id);
      toast.error("Task Berhasil dihapus");
    }
  };

  return (
    <>
      <Toaster richColors position='top-center' />
      <li className='todo-item'>
        <span
          onClick={() => {
            toggleComplete(todo.id);
            if (!todo.completed) {
              toast.info("Task dicoret anjay");
            } else if (todo.completed) {
              toast.info("lah gajadi dicoret");
            }
          }}
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            cursor: "pointer",
          }}
        >
          {todo.text}
        </span>
        <button onClick={handleDelete}>Hapus</button>
      </li>
    </>
  );
}
