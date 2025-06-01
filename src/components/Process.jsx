import React from 'react';
import './styles/Process.css';
import targetAudiencePic from '../assets/target-audience.png';
import researchPic from '../assets/search.png';
import featurePic from '../assets/feature-selection.png';

function Process() {
    return (
        <div className="processContainer">

            <h1 className="processTitle">Ons Process.</h1>
            <div className="processBox1">
                <h2
                    className="processboxText">Fase 1: Onderzoek</h2>
                <div className="explainContent">

                    <div className="fase1IconsContent">

                        <div className="explainLineContent">

                            <div style={{ flexDirection: 'column', }}>

                                <img src={targetAudiencePic} className='explainPic' />
                                <p className="iconTitle">Target Audience</p>
                            </div>
                            <p className="explainText">Wie zijn je Gebruikers?</p>
                        </div>
                        <div className="explainLineContent">

                            <div style={{ flexDirection: 'column', }}>
                                <img src={researchPic} className='explainPic' />
                                <p className="iconTitle">Analyse</p>
                            </div>
                            <p className="explainText">Wat is er nodig om dit te bereiken?</p>
                        </div>
                        <div className="explainLineContent">

                            <div style={{ flexDirection: 'column', }}>
                                <img src={featurePic} className='explainPic' />
                                <p className="iconTitle">Features</p>
                            </div>
                            <p className="explainText">Wat moet jouw app of website kunnen?</p>
                        </div>

                    </div>


                </div>
            </div>
            <div className="processBox1">
                <h2
                    className="processboxText">Fase 2: Ontwikkeling </h2>
                <div>

                </div>
            </div>
            <div className="processBox1">
                <h2
                    className="processboxText">Fase 3: Oplevering </h2>
                <div></div>
            </div>
            <div className="processBox1">
                <h2
                    className="processboxText">Fase 4: Aftercare </h2>
                <div></div>
            </div>
        </div>
    );
}

export default Process;