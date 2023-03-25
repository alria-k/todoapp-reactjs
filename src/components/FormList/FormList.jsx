import React from "react";

export function FormList({ val }) {
  return (
    <li className="form__list">
      <label className="form__checkbox" htmlFor="form-checkbox">
        <input name="form-checkbox" type="checkbox" />
      </label>
      <p className="form__text">{val}</p>
    </li>
  );
}
