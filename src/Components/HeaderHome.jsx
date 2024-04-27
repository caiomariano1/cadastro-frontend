import React from "react";
import { Link } from "react-router-dom";
import "./HeaderHome.css";

const HeaderHome = () => {
  return (
    <header>
      <div className="content">
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <div className="btn-addContact">
          <Link to="/post">
            <button>Adicionar contato</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderHome;
