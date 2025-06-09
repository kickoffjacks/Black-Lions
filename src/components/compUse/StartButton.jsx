import "../styles/StartButton.css";

const StartButton = ({ isHeader = false, openIntakeForm }) => {
  const handleClick = (e) => {
    e.preventDefault();
    openIntakeForm();
  };
  return (
    <button
      className={`startButton ${isHeader ? "startButton-header" : ""}`}
      onClick={handleClick}
    >
      <a href="#contact" style={{ textDecoration: "none", color: "inherit" }}>
        Boek een afspraak
      </a>
    </button>
  );
};

export default StartButton;
