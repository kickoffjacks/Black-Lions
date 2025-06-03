import React from 'react';
import './styles/About.css';
import NawiFoto from '../assets/Nawi-Foto.png'; // Assuming you have an image of Nawaaz in the assets folder

//over ons Section
function About() {
    return (
        <div className="aboutContainer">
            <div className="aboutContent">

                <h1 className="overonsTitle">Slim, Fris, Modern.</h1>


                <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', height: 'auto', paddingTop: '20px', }}>
                    <div className="overonsTextContainerHalve">


                        <div className='TextBox'>
                            <h2 className="TextBoxTitle">Waarom bedrijven voor ons kiezen?</h2>
                            <p style={{color: 'white',}}>🔍 Betrouwbare kwaliteit: We leveren altijd een strak werkende website of app.
                                ⚡ Snelle ontwikkeling: Geen maanden wachten. We bouwen snel en doordacht.
                                💬 Persoonlijk contact: Je spreekt met mensen, niet met helpdesks.
                                🎯 Focus op resultaat: Alles wat we maken, is gericht op jouw doelen.</p>
                        </div>
                        <div className='TextBox'>
                            <h2 className="TextBoxTitle">Wat voor apps maken wij?</h2>
                            <p style={{color: 'white',}}>📱 Mobiele apps: Voor iOS & Android, intuïtief en snel.
                                🛍️ Webshops & platforms: Van marketplaces tot boekingssystemen.
                                📊 Dashboards & tools: Voor intern gebruik of klantenportalen.
                                🔌 API-integraties: We koppelen alles — van betalingssystemen tot datafeeds</p>
                        </div>
                        <div className='TextBox'>
                            <h2 className="TextBoxTitle">Hoe werken wij samen?</h2>
                            <p style={{color: 'white',}}>🤝 Samen sparren: Jij kent je doelgroep, wij vertalen dat naar techniek.
                                🧠 Heldere stappen: Van ontwerp tot oplevering, je weet altijd waar we zijn.
                                🔄 Flexibel: We denken met je mee als dingen tussendoor veranderen.
                                📦 Afgeleverd & klaar: Geen half werk. Je krijgt een product dat werkt én schaalbaar is.</p>
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