import React from "react";
import { useState } from "react";
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
        <div className="form-columns">
          <div className="intake-form-column1">
            <form>
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
            </form>
          </div>
          <button type="submit">Submit</button>
          <div className="intake-form-column2">
            <form>
              <label className="option-label">Ik wil een:</label>
              <label>
                <input
                  itemType="checkbox"
                  name="Website"
                  checked={selectedOptions.Website}
                  onChange={handleOptionChange}
                />
                <span className="option-text">Website</span>
              </label>
              <label>
                <input
                  itemType="checkbox"
                  name="App"
                  checked={selectedOptions.App}
                  onChange={handleOptionChange}
                />
                <span className="option-text">App</span>
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntakeForm;
