import React from 'react';
import './styles/Contact.css';

function Contact() {
    return (
        <div className="contactContainer">
            <div className="contactContent">
                <h2 className="CTAtext">Klaar voor verandering?</h2>
                <p className="CTAtextp">Wij helpen je met op maat gemaakte app- en weboplossingen die jouw bedrijf laten groeien. Neem contact met ons op! Bel Ons</p>
                <div className="button-container">


                    <button className="belOns">Bel ons</button>
                    <button className="mailOns">Mail ons</button>

                </div>
            </div>
        </div>
    );
}

export default Contact;