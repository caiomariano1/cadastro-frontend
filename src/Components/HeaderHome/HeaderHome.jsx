import React from "react";
import { Link } from "react-router-dom";
import "./HeaderHome.css";
import Logo from "../../assets/contato-logo.svg";
import { useAuth } from "../../hooks/useAuth";
import { useAuthvalue } from "../../context/AuthContext";

const HeaderHome = () => {
  const { user } = useAuthvalue();
  const { logout } = useAuth();

  return (
    <header>
      <div className="content">
        <div className="logo">
          {/* <h1>Logo</h1> */}
          <img src={Logo} style={{ width: "150px" }} />
        </div>
        <div className="navbar-home">
          {!user && (
            <>
              <Link className="link" to="/login">
                Login
              </Link>
              <span className="bar"> | </span>
              <Link className="link" to="/register">
                Cadastro
              </Link>
            </>
          )}
          {user && (
            <>
              <button className="btn-exit" onClick={logout}>
                Sair da conta
              </button>
            </>
          )}
        </div>
        {/* <div className="btn-addContact">
          <Link to="/post">
            <button>Adicionar +</button>
          </Link>
        </div> */}
      </div>
    </header>
  );
};

export default HeaderHome;
