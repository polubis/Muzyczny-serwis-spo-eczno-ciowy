import React from "react";
import { MotiveContext } from "./context";
const contextProvider = props => (
  <MotiveContext.Provider value={props.value}>
    {props.children}
  </MotiveContext.Provider>
);

export default contextProvider;
