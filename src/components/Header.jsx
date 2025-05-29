import React from 'react';
import './styles/Header.css';
import SectionWrapper from './compUse/SectionWrapper';
import gridareaLogo from '/Users/AppProjectss/gridarea/src/assets/gridareafiguur.png';
import gridareaLogo2 from '/Users/AppProjectss/gridarea/src/assets/gridareametfiguur.png';




function Header(){
return(
    <header className="header-container">

        <SectionWrapper>

        {/* <h1 className="headerText">Welcome bij GridArea </h1> */}
        <img src={gridareaLogo} alt="GridArea Logo" className="headerLogo" />

        </SectionWrapper>
    </header>
)

}

export default Header;
