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
            <li className="navigationItem home-item">
              <a href="#home">
                <span>Home</span>
              </a>
            </li>
            <li className="navigationItem watIsGridArea-item">
              <a href="#watIsGridArea">
                <span>Wat is Grid Area?</span>
              </a>
            </li>
            <li className="navigationItem onsProcess-item">
              <a href="#onsProcess">
                <span>Ons Process</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
