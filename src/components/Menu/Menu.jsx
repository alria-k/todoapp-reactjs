import { Link } from "react-router-dom";
import "./Menu.scss";

export function Menu() {
  return (
    <div className="menu__container">
      <div className="menu__img">
        <ul className="menu__inner">
          <li className="menu-item">
            <Link to="/" className="menu-link" state={{ id: "lol" }}>
              All
            </Link>
          </li>
          <li className="menu-item">
            <Link to="compleated" className="menu-link">
              Compleated
            </Link>
          </li>
          <li className="menu-item">
            <Link to="uncompleated" className="menu-link">
              Uncompleated
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
