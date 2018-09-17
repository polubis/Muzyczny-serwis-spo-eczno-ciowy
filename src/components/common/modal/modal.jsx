import React from "react";
import "./modal.scss";
import Transition from "react-transition-group/Transition";

const modal = ({show, showIcon, close, children}) => (

  <Transition mountOnEnter unmountOnExit in={show} timeout={500}>
    {state => (
      <div className={`backdrop ${show ? "open-backdrop" : "hide-backdrop"}`}>
        {showIcon && <i onClick={close} className="fa fa-times" />}
        <div className={`modal-container shadow ${show
            ? "modal-container-open"
            : "modal-container-close"}`}>
            
          {children}
        </div>
      </div>
    )}
  </Transition>
);

export default modal;
