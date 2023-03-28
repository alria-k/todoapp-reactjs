import React from "react";

export function FormList({ obj, func }) {
  return (
    <li className="form__list" data-compleated={obj.compleated}>
      <label className="form__checkbox" htmlFor="form-checkbox">
        <input
          name="form-checkbox"
          type="checkbox"
          checked={obj.compleated}
          onChange={() => {
            func(e, obj.id);
          }}
        />
      </label>
      <p className="form__text">{obj.text}</p>
    </li>
  );
}
