import "./styles/Home.css";
import GridAreaLogoTextOnlyWhite from "../assets/GridAreaLogoTextOnlyWhite.png";
import StartButton from "./compUse/StartButton.jsx";

export default function Home() {
  return (
    <div className="homeContainer">
      <div className="homeContent">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <a href="http://localhost:3000/">
            {" "}
            <img
              src={GridAreaLogoTextOnlyWhite}
              className="gridAreaLogoTextOnlyWhite"
              alt="Grid Area Logo"
            />{" "}
          </a>
        </div>

        <div style={{ width: "50%" }}>
          <p className="explainTextHeader">
            Bouw de digitale standplaats
            <br /> voor jouw online legacy.
          </p>
        </div>
        <StartButton />
      </div>
    </div>
  );
}
