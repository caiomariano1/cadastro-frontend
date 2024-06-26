import React from "react";
import { Link } from "react-router-dom";
import "./HeaderHome.css";
import Logo from "../../assets/contato-logo.svg";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const HeaderHome = () => {
  // const { user } = useAuthvalue();
  // const { logout } = useAuth();

  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <header>
      <div className="content">
        <div className="logo">
          {/* <h1>Logo</h1> */}
          <img src={Logo} style={{ width: "150px" }} />
        </div>
        <div className="navbar-home">
          {isAuthenticated ? (
            <button className="btn-exit" onClick={handleLogout}>
              Sair da conta
            </button>
          ) : (
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
        </div>
      </div>
    </header>
  );
};

export default HeaderHome;
