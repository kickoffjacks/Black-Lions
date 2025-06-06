import React from "react";
import "./styles/ScreenShotsSection.css";
import demofoto1 from "../assets/demoFoto1.PNG";
import demofoto2 from "../assets/demoFoto2.PNG";
import demofoto3 from "../assets/demoFoto3.PNG";
import demofoto4 from "../assets/demoFoto4.PNG";

function ScreenshotsSection() {
  return (
    <div className="ScreenshotContainer">
      <div className="screenshotContent">
        <h1 className="sneakpeakText">
          Hier een kleine sneakpeak van ons nieuwe project...
        </h1>

        <div className="screenshotContentBox">
          <img src={demofoto1} className="screenshotImage" alt="" />
          <img src={demofoto2} className="screenshotImage" alt="" />
          <img src={demofoto3} className="screenshotImage" alt="" />
          <img src={demofoto4} className="screenshotImage" alt="" />
        </div>
      </div>
    </div>
  );
}

export default ScreenshotsSection;
