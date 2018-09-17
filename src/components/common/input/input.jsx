import React from "react";
import "./input.scss";

const input = ({ inputObject, onChangeInputHandler, index, setting}) => (
  <section className="input-container">
    <label>{inputObject.label} {setting.required ? "*" : null}</label>

    <div>
        <input className={`${inputObject.error ? "invalid-input" : ""}`}
        onChange={e => onChangeInputHandler(e, index)}
        value={inputObject.value}
        type={inputObject.type}
        placeholder={inputObject.placeholder}
        />

        <p className="validation-message">{inputObject.error}</p>
    </div>
  </section>
);

export default input;
