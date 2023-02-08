import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Header.css";
import App from "../../App";

function Header() {
  return (
    <Router>
      <div className="Header">
        <div className="Nav-Buttons">
          <div className="Nav-Button">
            <Link to={App}>Stats</Link>
          </div>
          <div className="Nav-Button">nigger</div>
        </div>
      </div>
    </Router>
  );
}

export default Header;
