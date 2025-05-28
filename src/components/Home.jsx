import React from 'react';
import './styles/Home.css';
import gridareaLogo2 from '/Users/AppProjectss/gridarea/src/assets/gridareametfiguur.png';

export default function Home() {
  return (
    <div className="homeContainer">

      <div className="homeContent">

<div style={{display: 'flex', flexDirection: "row"}}>

        <h2 className="title">GridArea</h2>
        <p>For Commercial use</p>

</div>


        <div style={{width: "50%",}}>
        <p className="explainText">Jouw website/app maken wij voor jou</p>
        </div>

        <button className="startButton">Start</button>

        
      </div>

    </div>
  );
}