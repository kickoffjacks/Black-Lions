import React from "react";
import "./styles/Process.css";
import targetAudiencePic from "../assets/target-audience.png";
import researchPic from "../assets/search.png";
import featurePic from "../assets/feature-selection.png";
import wireframe from "../assets/wireframe.png";
import design from "../assets/web-design.png";
import feedback from "../assets/positive-review.png";
import development from "../assets/physics.png";
import api from "../assets/api.png";
import testing from "../assets/testing2.png";
import optimalisation from "../assets/Optimalisation.png";
import monitoring from "../assets/monitoring.png";
import customerService from "../assets/customer-service.png";
import bugFix from "../assets/bug.png";
import documentatie from "../assets/folders.png";

function Process() {
  const ContentCard = ({ children }) => {
    return <div className="contentCard">{children}</div>;
  };
  return (
    <ContentCard>
      <div className="processContainer">
        <p className="processTitle">Ons Process.</p>
        <div className="processBox1 item1">
          <h2 className="processboxText">Fase 1: Onderzoek</h2>
          <div className="explainContent">
            <div className="fase1IconsContent">
              <div className="explainLineContent">
                <img src={targetAudiencePic} className="explainPic" alt="" />
                <p className="explainText">Target Audience</p>
              </div>
              <div className="explainLineContent">
                <img src={researchPic} className="explainPic" alt="" />
                <p className="explainText">Analyse</p>
              </div>
              <div className="explainLineContent">
                <img src={featurePic} className="explainPic" alt="" />
                <p className="explainText">Features</p>
              </div>
            </div>
          </div>
        </div>
        <div className="processBox1 item2">
          <h2 className="processboxText">Fase 2: Ontwikkeling </h2>

          <div className="explainContent">
            <div className="fase1IconsContent">
              <div className="explainLineContent">
                <img src={wireframe} className="explainPic" alt="" />
                <p className="explainText">WireFrames</p>
              </div>
              <div className="explainLineContent">
                <img src={design} className="explainPic" alt="" />
                <p className="explainText">Design</p>
              </div>
              <div className="explainLineContent">
                <img src={development} className="explainPic" alt="" />
                <p className="explainText">Development</p>
              </div>
              <div className="explainLineContent">
                <img src={api} className="explainPic" alt="" />
                <p className="explainText">Api intergratie</p>
              </div>
            </div>
          </div>
        </div>
        <div className="processBox1 item3">
          <h2 className="processboxText">Fase 3: Oplevering </h2>
          <div className="explainContent">
            <div className="fase1IconsContent">
              <div className="explainLineContent">
                <img src={testing} className="explainPic" alt="" />
                <p className="explainText">Final test</p>
              </div>
              <div className="explainLineContent">
                <img src={documentatie} className="explainPic" alt="" />
                <p className="explainText">Documentatie</p>
              </div>
              <div className="explainLineContent">
                <img src={feedback} className="explainPic" alt="" />
                <p className="explainText">Feedbackronde</p>
              </div>
            </div>
          </div>
        </div>
        <div className="processBox1 item4">
          <h2 className="processboxText">Fase 4: Aftercare </h2>
          <div className="explainContent">
            <div className="fase1IconsContent">
              <div className="explainLineContent">
                <img src={monitoring} className="explainPic" alt="" />
                <p className="explainText">Monitoring</p>
              </div>
              <div className="explainLineContent">
                <img src={bugFix} className="explainPic" alt="" />
                <p className="explainText">Bugfixes</p>
              </div>
              <div className="explainLineContent">
                <img src={optimalisation} className="explainPic" alt="" />
                <p className="explainText">Optimalisatie</p>
              </div>
              <div className="explainLineContent">
                <img src={customerService} className="explainPic" alt="" />
                <p className="explainText">Ondersteuning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentCard>
  );
}

export default Process;
