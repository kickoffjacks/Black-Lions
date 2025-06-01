import React from 'react';
import './styles/About.css';

function About() {
    return (
        <div className="aboutContainer">
            <div className="aboutContent">

                <h1 style={{ color: "white" }}>Over ons</h1>


                <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', height: '100%' }}>
                    <div className="overonsTextContainerHalve">


                        <div className='TextBox'>
                            <h2 className="TextBoxTitle">Waarom bedrijven voor ons kiezen?</h2>
                            <p></p>
                        </div>
                        <div className='TextBox'>
                            <h2 className="TextBoxTitle">Waarom bedrijven voor ons kiezen?</h2>
                            <p></p>
                        </div>
                        <div className='TextBox'>
                            <h2 className="TextBoxTitle">Waarom bedrijven voor ons kiezen?</h2>
                            <p></p>
                        </div>
                    </div>


                    <div className='overonsTextContainerHalve2'>


                        <div className="contactonsGridContent">

                            <div className='overonsGridHeader'>Contact?
                            </div>

                            <div className="avatar"></div>
                            <div className="contentText">

                                <h3>Meer weten over ons?</h3>
                                <p>Neem contact met ons op via de onderstaande knop.</p>
                            </div>


                            <div className="buttonContent">
                                <button className="contactButton">Contact</button>
                            </div>


                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default About;