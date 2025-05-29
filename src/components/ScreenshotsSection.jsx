import React from 'react';
import '/Users/mitchelsullivan/Grid Area/src/components/styles/ScreenShotsSection.css';
import demofoto1 from '/Users/mitchelsullivan/Grid Area/src/assets/demoFoto1.PNG';
import demofoto2 from '/Users/mitchelsullivan/Grid Area/src/assets/demoFoto2.PNG';
import demofoto3 from '/Users/mitchelsullivan/Grid Area/src/assets/demoFoto3.PNG';


function ScreenshotsSection() {
    return (
        <div className="ScreenshotContainer">
            <div className='screenshotContent'>

                <h1 style={{color: 'white',}}>Hier een kleine sneakpeak van ons nieuwe project.</h1>

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