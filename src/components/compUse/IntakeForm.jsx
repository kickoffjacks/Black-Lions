import React, { useState } from "react";
import "../styles/IntakeForm.css";

const IntakeForm = ({ isOpen, onClose }) => {
  const [selectedOptions, setSelectedOptions] = useState({
    Website: false,
    App: false,
  });

  if (!isOpen) return null;

  const handleOptionChange = (e) => {
    const { name, checked } = e.target;
    setSelectedOptions((prev) => ({ ...prev, [name]: checked }));
  };

  return (
    <div className="intake-form-overlay">
      <div className="intake-form-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h2>Dit is de start van jouw digitale overname</h2>
        <form action="https://submit-form.com/33k571r3T">
          <div className="form-columns">
            <div className="intake-form-column1">
              <label>
                Name:
                <input type="text" name="name" required />
              </label>
              <label>
                Email:
                <input type="email" name="email" required />
              </label>
              <label>
                Phone:
                <input type="tel" name="phone" required />
              </label>
            </div>
            <div className="intake-form-column2">
              <label className="option-label">Ik wil een:</label>
              <label>
                <input
                  type="checkbox" // Correcte attribuut
                  name="Website"
                  checked={selectedOptions.Website}
                  onChange={handleOptionChange}
                />
                <span className="option-text">Website</span>
              </label>
              <label>
                <input
                  type="checkbox" // Correcte attribuut
                  name="App"
                  checked={selectedOptions.App}
                  onChange={handleOptionChange}
                />
                <span className="option-text">App</span>
              </label>
              <label>
                <textarea
                  name="uitleg"
                  placeholder="Voeg beschrijving toe.. 
                  (Denk aan:
                  Target Audience, 
                  Functionaliteiten,
                  Handige informatie om te delen)"
                  required
                />
              </label>
            </div>
          </div>
          <button className="submitButton" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default IntakeForm;
