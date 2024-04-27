import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="content">
        <Link to="/home">
          <button>Voltar</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
