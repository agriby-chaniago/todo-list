import { useState } from "react";
import PropTypes from "prop-types";
import { Toaster, toast } from "sonner";

export default function InputForm({ addTodo }) {
  const [input, setInput] = useState("");

  InputForm.propTypes = { addTodo: PropTypes.func.isRequired };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput("");
      toast.success("Task Berhasil ditambahkan");
    }
  };

  return (
    <>
      <Toaster richColors position='top-center' />
      <form onSubmit={handleSubmit} className='input-form'>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Tambah task...'
        />

        <button type='submit'>Tambah</button>
      </form>
    </>
  );
}
