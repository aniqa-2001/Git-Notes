import React from "react";
import Elogo from "../../assets/Logo/Emumba_Logo_1.png";
import "./HeaderStyle.css";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Elogo} alt="Emumba logo" />
      </div>
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search Gists"
        />

        <button className="login-button">Login</button>
      </div>
    </nav>
  );
};
export default Header;
