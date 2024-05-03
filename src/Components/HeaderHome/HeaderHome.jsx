import React from "react";
import { Link } from "react-router-dom";
import "./HeaderHome.css";
import Logo from "../../assets/contato-logo.svg";

const HeaderHome = () => {
  return (
    <header>
      <div className="content">
        <div className="logo">
          {/* <h1>Logo</h1> */}
          <img src={Logo} style={{ width: "150px" }} />
        </div>
        <div className="navbar-home">
          <Link className="link" to="/">
            Login
          </Link>
          <span className="bar"> | </span>
          <Link className="link" to="/register">
            Cadastro
          </Link>
        </div>
        <div className="btn-addContact">
          <Link to="/post">
            <button>Adicionar +</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderHome;
