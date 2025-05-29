import React from 'react';
import '/Users/AppProjectss/gridarea/src/components/styles/ScreenShotsSection.css';
import demofoto1 from '/Users/AppProjectss/gridarea/src/assets/demoFoto1.PNG';
import demofoto2 from '/Users/AppProjectss/gridarea/src/assets/demoFoto2.PNG';
import demofoto3 from '/Users/AppProjectss/gridarea/src/assets/demoFoto3.PNG';


function ScreenshotsSection() {
    return (
        <div className="ScreenshotContainer">
            <div className='screenshotContent'>

                <h1 style={{color: 'white',}}>Hier een kleine sneakpeak van onze nieuwe project.</h1>

                <div className="screenshotContentBox">
                    <img src={demofoto1} className='screenshotImage' />
                    <img src={demofoto2} className='screenshotImage' />
                    <img src={demofoto3} className='screenshotImage' />
                </div>
            </div>


        </div>
    );
}

export default ScreenshotsSection;