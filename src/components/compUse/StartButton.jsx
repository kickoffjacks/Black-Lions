import "../styles/StartButton.css";

const StartButton = ({ isHeader = false }) => {
  return (
    <button className={`startButton ${isHeader ? "startButton-header" : ""}`}>
      <a href="#contact" style={{ textDecoration: "none", color: "inherit" }}>
        Boek een afspraak
      </a>
    </button>
  );
};

export default StartButton;
