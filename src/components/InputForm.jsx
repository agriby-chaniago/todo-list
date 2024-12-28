import { useState } from "react";
import PropTypes from "prop-types";

export default function InputForm({ addTodo }) {
  const [input, setInput] = useState("");

  InputForm.propTypes = { addTodo: PropTypes.func.isRequired };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput("");
      alert("Task berhasil ditambahkan!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className='input-form'>
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Tambah task...'
      />
      <button type='submit'>Tambah</button>
    </form>
  );
}
