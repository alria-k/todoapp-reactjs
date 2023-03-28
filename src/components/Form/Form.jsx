import React from "react";
import { FormList, Menu } from "../index";
import { v4 as uuidv4 } from "uuid";

export function Form() {
  const [text, setText] = React.useState("");
  const [checked, setChecked] = React.useState(false);
  const [todos, setTodos] = React.useState(() => {
    const getStorage = localStorage.getItem("todos");
    if (getStorage) {
      const turnStorageArr = JSON.parse(getStorage);
      return turnStorageArr;
    }
    return [];
  });

  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleChecked = (e, id) => {
    setChecked(e.target.checked);
    console.log(id);
  };

  const handleTodos = () => {
    if (!/(.|\s)*\S(.|\s)*/.test(text)) {
      return;
    }
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        text: text,
        compleated: false,
      },
    ]);
    setText("");
  };

  return (
    <div className="container">
      <div className="form__container">
        <Menu />
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
            todos.map((elem) => {
              return <FormList key={elem.id} obj={elem} func={handleChecked} />;
            })
          ) : (
            <div className="form-list__empty">No Todos</div>
          )}
        </ul>
      </div>
    </div>
  );
}
