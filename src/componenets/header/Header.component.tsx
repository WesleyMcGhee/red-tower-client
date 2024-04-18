import { Link } from "wouter";
import "Header.css";

function Header() {
  return (
    <header className="header">
      <h1>Red Tower</h1>
      <div>
        <ul className="nav-list">
          <li className="nav-item">
            <Link className="nav-link" href="/signup">
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/login">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export { Header };
