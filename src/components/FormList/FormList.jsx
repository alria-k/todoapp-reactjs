import React from "react";
import { useOutletContext } from "react-router-dom";

export function FormList({ obj = useOutletContext() }) {
  return (
    <ul className="form-list__box">
      {obj.todos.length > 0 ? (
        obj.todos.map((elem) => {
          return (
            <li
              className="form__list"
              data-compleated={elem.compleated}
              key={elem.id}
            >
              <label className="form__checkbox" htmlFor="form-checkbox">
                <input
                  name="form-checkbox"
                  type="checkbox"
                  checked={elem.compleated}
                  onChange={(e) => {
                    obj.func(e, elem.id);
                  }}
                />
              </label>
              <p className="form__text">{elem.text}</p>
            </li>
          );
        })
      ) : (
        <div className="form-list__empty">No Todos</div>
      )}
    </ul>
  );
}
