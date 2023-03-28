import React from "react";
import { FormList } from "../index";

export function Form() {
  const [text, setText] = React.useState("");
  const [todos, setTodos] = React.useState(() => {
    const getStorage = localStorage.getItem("todos");
    if (getStorage) {
      const turnStorageArr = getStorage.split(",");
      return turnStorageArr;
    }
    return [];
  });

  React.useEffect(() => {
    localStorage.setItem("todos", todos);
  }, [todos]);

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
          <form
            className="form-input__container"
            onSubmit={(e) => {
              e.preventDefault();
              handleTodos;
            }}
          >
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
          </form>
        </div>
        <ul className="form-list__box">
          {todos.length > 0 ? (
            todos.map((elem, index) => {
              return <FormList key={index} val={elem} />;
            })
          ) : (
            <div className="form-list__empty">No Todos</div>
          )}
        </ul>
      </div>
    </div>
  );
}
