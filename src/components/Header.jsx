import React, {useState, useEffect } from 'react';
import './styles/Header.css';
import SectionWrapper from './compUse/SectionWrapper';
import gridareafiguur from '../assets/gridareametfiguur.png';





function Header() {

return(
    <header className="header-container">

        <SectionWrapper>

        {/* <h1 className="headerText">Welcome bij GridArea </h1> */}
           <img src={gridareafiguur} alt="GridArea Logo" className="headerLogo" />

        </SectionWrapper>
    </header>
)

}

export default Header;
