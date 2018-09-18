import React from "react";
import "./input.scss";

const input = ({ inputObject, onChangeInputHandler, onChangeCheckboxHandler, index, setting}) => (
  <section className="input-container">
    <label>{inputObject.label} {setting.required ? "*" : null}</label>

    {inputObject.mode === "check" ? 
      <div className="checkbox-container">
          <input type="checkbox" onChange={() => onChangeCheckboxHandler(index)}
          value={inputObject.value} />

          {inputObject.value ? 
            <label>{inputObject.checkValueTrue}</label> : 
            <label>{inputObject.checkValueFalse}</label>
          }
        </div>
      :
      <div className="normal-input-container">
        <input className={`${inputObject.error ? "invalid-input" : ""}`}
        onChange={e => onChangeInputHandler(e, index)}
        value={inputObject.value}
        type={inputObject.type}
        placeholder={inputObject.placeholder}
        />

        <p className="validation-message">{inputObject.error}</p>
      </div>
    }
  
  </section>
);

export default input;
