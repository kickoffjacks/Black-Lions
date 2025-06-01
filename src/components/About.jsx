import React from 'react';
import './styles/About.css';
import NawiFoto from '../assets/Nawi-Foto.png'; // Assuming you have an image of Nawaaz in the assets folder

//over ons Section
function About() {
    return (
        <div className="aboutContainer">
            <div className="aboutContent">

                <h1 className="overonsTitle">Slim, Fris, Modern.</h1>


                <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', height: '110%' }}>
                    <div className="overonsTextContainerHalve">


                        <div className='TextBox'>
                                <h2 className="TextBoxTitle">Waarom bedrijven voor ons kiezen?</h2>
                            <p></p>
                        </div>
                        <div className='TextBox'>
                                <h2 className="TextBoxTitle">Wat voor apps maken wij?</h2>
                            <p></p>
                        </div>
                        <div className='TextBox'>
                                <h2 className="TextBoxTitle">Waarom bedrijven voor ons kiezen?</h2>
                            <p></p>
                        </div>
                    </div>


                    <div className='overonsTextContainerHalve2'>


                        <div className="contactonsGridContent">




                                <div className='overonsGridHeader'>Head business development
                                </div>

                                <div className="avatar">
                                    <img className="avatarImg" src={NawiFoto} alt="fotovanNawaaz" />
                                </div>
                                <div className="contentText">

                                    <h3 className="meerwetenText">Meer weten?</h3>
                                    <p>Neem contact met ons.</p>
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