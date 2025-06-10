import React, { useState } from "react";
import "./styles/Contact.css";

function Contact() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="contactContainer">
            <div className="contactContent">
                <h2 className="CTAtext">Klaar voor verandering?</h2>
                <p className="CTAtextp">
                    Wij helpen je met op maat gemaakte app- en weboplossingen die jouw
                    bedrijf laten groeien. Neem contact met ons op!
                </p>
                <div className="button-container">
                    <button className="belOns" onClick={() => {
                        console.log("modal is open")
                        setIsOpen(true)
                        }}>Bel ons</button>
                    <button className="mailOns">Mail ons</button>
                </div>
            </div>
            {isOpen && (
                <div className='backdropStyle'>
                    <div className="modalStyle">
                        <h2>Contact</h2>
                        <p>nummer</p>
                        <button onClick={() => setIsOpen(false)}>Sluiten</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Contact;
