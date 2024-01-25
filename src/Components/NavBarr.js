import React from "react";
import { Link } from "react-router-dom";
import "./NavBarr.css";
export default function NavBarr() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/for-him">For Him</Link>
          </li>
          <li>
            <Link to="/for-her">For Her</Link>
          </li>
          <li>
            <Link to="/cake">Cake</Link>
          </li>
          <li>
            <Link to="/flower">Flower</Link>
          </li>
          <li>
            <Link to="/Personalized-Gift">Personalized Gift</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
