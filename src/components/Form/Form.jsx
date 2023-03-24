import { FormList } from "../index";

export function Form() {
  return (
    <div className="container">
      <div className="form__container">
        <div className="form__inner">
          <h1 className="form__title">Add new todo in List!</h1>
          <label className="form-input__container">
            <input
              className="form__input"
              type="text"
              placeholder="Write todo"
            />
            <button className="form__btn">Add Todo!</button>
          </label>
        </div>
        <ul className="form-list__box">
          <FormList />
        </ul>
      </div>
    </div>
  );
}
