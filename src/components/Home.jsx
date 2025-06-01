import React from 'react';
import './styles/Home.css';
import GridAreaLogoTextOnlyWhite from '../assets/GridAreaLogoTextOnlyWhite.png'


export default function Home() {
  return (
    <div className="homeContainer">

      <div className="homeContent">
        <div style={{ display: 'flex', flexDirection: "row" }}>
         <a href="http://localhost:3000/"> <img src={GridAreaLogoTextOnlyWhite} className="gridAreaLogoTextOnlyWhite" alt="Grid Area Logo"/> </a>
        </div>

        <div style={{ width: "50%", }}>
          <p className="explainText">Jouw website/app maken wij voor jou</p>
        </div>
        <button className="startButton">Creëer mijn App/Website</button>


      </div>

    </div>
  );
}