import React from "react";
import logo from "./assets/udemy-new-20212512.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Link, Routes, Route } from "react-router-dom";

function Header() {
  return (
    <div id="header" className="d-flex justify-content-start p-1">
      <a href="./">
        <img class="" src={logo} alt="logo" style={{ width: "91px" }} />
      </a>

      <input className="w-75 m-2" id="search-bar" />
      <Link
        className="p-2 text-decoration-none bg-white text-dark border border-dark m-2"
        to="/login"
      >
        Log in
      </Link>
      <a
        className="p-2 text-decoration-none bg-dark text-white border border-dark m-2"
        href="./register"
      >
        Register
      </a>
    </div>
  );
}
export default Header;
