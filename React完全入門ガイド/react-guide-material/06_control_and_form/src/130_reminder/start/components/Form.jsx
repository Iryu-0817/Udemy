import { useState } from "react";

const Form = ({ createTodo }) => {
  const [enteredTodo, setEnteredTodo] = useState("");
  const addTodo = (e) => {
    const inputValue = e.target.value;
    e.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enteredTodo,
    };

    createTodo(newTodo);

    setEnteredTodo("");
  };
  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={enteredTodo}
          onChange={(e) => {
            setEnteredTodo(e.target.value);
          }}
        />
        <button onClick={addTodo}>追加</button>
        <span>{enteredTodo}</span>
      </form>
    </div>
  );
};

export default Form;
