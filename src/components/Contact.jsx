import React from 'react';
import './styles/Contact.css';

function Contact() {
    return (
        <div className="contactContainer">
            <div className="contactContent">
                <h2 className="CTAtext">Klaar voor verandering?</h2>
                <div className="button-container">
                    <button className="belOns">
                        Bel ons
                    </button>
                    <button className="mailOns">
                        Mail ons
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Contact;