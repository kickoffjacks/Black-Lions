import React, { useState, useEffect } from "react";
import "./styles/Header.css";
import SectionWrapper from "./compUse/SectionWrapper";
import gridareafiguur from "../assets/gridareametfiguur.png";

function Header() {
  return (
    <header className="header-container">
      <a>
        <img src={gridareafiguur} alt="GridArea Logo" className="headerLogo" />
      </a>

      <div className="navigationBarContainer">
        <nav className="navigationBar">
          <ul className="navigationList">
            <li className="navigationItem">
              <a href="#home">Home</a>
            </li>
            <li className="navigationItem">
              <a href="#watIsGridArea">Wat is Grid Area?</a>
            </li>
            <li className="navigationItem">
              <a href="#onsProcess">Ons Process</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
