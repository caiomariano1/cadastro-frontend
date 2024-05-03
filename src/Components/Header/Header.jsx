import React from "react";
import { Link } from "react-router-dom";
import backButton from "../../assets/back-button.svg";

const Header = () => {
  return (
    <header>
      <div className="content">
        <Link to="/home">
          <img src={backButton} style={{ width: "50px" }} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
