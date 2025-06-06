import "./styles/WhatIsGrid.css";

function WhatIsGrid() {
  return (
    <div className="GridAreaContainer">
      <div className="gridTitleContent">
        <h1 className="titleText">
          Wat is <span className="angledUnderline">Grid Area</span> nou
          eigenlijk??
        </h1>
      </div>

      <div className="gridareaContainer">
        <div className="gridbox1">
          <h2 className="wieText">
            Wij zijn een groep ontwikkelaars die geweldige Apps en Websites voor
            onze partners wilt creeren.{" "}
          </h2>
          <p className="wieuitlegText">
            Wij zijn een jonge groep app ontwikkelaars. Begonnen vanuit Utrecht.{" "}
          </p>
        </div>
        <div className="gridbox2">
          <h1 className="wieText skilltext">🔥Skill Set:</h1>
          <ul className="gridSkillSet">
            <li>React-Native</li>
            <li>React</li>
            <li>JavaScript</li>
            {/* <li>HTML</li> */}
            {/* <li>CSS</li> */}
            <li>TypeScript</li>
          </ul>
        </div>
        <div className="gridbox3">
          <h1 className="wieText">🎨Style Set:</h1>
          <p className="wieText styletext">
            Strak, functioneel, visueel sterk. Onze code *klikt*, onze ontwerpen
            *blinken*. Geen poespas. Alleen resultaat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhatIsGrid;
