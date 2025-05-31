import React from 'react';
import '../styles/MainSectionLayout.css'

function MainSectionLayout({children}) {
    // Deze component is bedoeld om de main content van de pagina te structureren
return(
    <div className="mainSectionContainer">
        {children}

    </div>
)
};

export default MainSectionLayout;