import React from "react";
import { FormList } from "../index";

export function Form() {
  const [text, setText] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleTodos = () => {
    if (!text == "") {
      setTodos([...todos, text]);
      setText("");
    }
  };

  return (
    <div className="container">
      <div className="form__container">
        <div className="form__inner">
          <h1 className="form__title">Add new todo in List!</h1>
          <label className="form-input__container">
            <input
              className="form__input"
              type="text"
              value={text}
              placeholder="Write todo"
              onChange={handleChange}
            />
            <button className="form__btn" onClick={handleTodos}>
              Add Todo!
            </button>
          </label>
        </div>
        <ul className="form-list__box">
          {todos.length > 0 ? (
            todos.map((elem, index) => {
              return <FormList key={index} val={elem} />;
            })
          ) : (
            <div>No Todos</div>
          )}
        </ul>
      </div>
    </div>
  );
}
