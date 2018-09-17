import React from "react";
import "./input.scss";

const input = ({ inputObject, onChangeInputHandler, index, setting }) => {
  const { errors } = inputObject;
  let firstOccuredError = "";

  if(errors.length > 0){
    const errorObject = errors.find(i => {
      return i.isError === true
    });
    if(errorObject)
      firstOccuredError = errorObject.description;
  }

  return (
    <section className="input-container">
      <label>
        {inputObject.label} {setting.required ? "*" : null}
      </label>

      <div>
        <input
          className={`${firstOccuredError ? "invalid-input" : ""}`}
          onChange={e => onChangeInputHandler(e, index)}
          value={inputObject.value}
          type={inputObject.type}
          placeholder={inputObject.placeholder}
        />

        <p className="validation-message">{firstOccuredError}</p>
      </div>
    </section>
  );
};

export default input;
