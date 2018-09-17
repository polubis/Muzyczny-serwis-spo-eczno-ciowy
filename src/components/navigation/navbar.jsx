import React from "react";
import "./navbar.scss";
import { MotiveContext } from "../../services/contextAPI/context";
import Button from "../common/button/button";
import Link from "../common/link/link";

const navbar = ({togleRegisterModal, togleLoginForm}) => {
  return (
    <MotiveContext.Consumer>
      {motive => (
        <nav id="navbar" className="shadow">
          <div className="btns">
            <Link path="/" icon="fa-home" color={motive.backgroundColor} />
            <section>
              <Link
                path="/about"
                title="O nas"
                mainClass="normal-link"
                color={motive.backgroundColor}
              />
              <Link
                path="/contact"
                title="Kontakt"
                mainClass="normal-link"
                color={motive.backgroundColor}
              />

              <Button
                onClick={togleLoginForm}
                color={motive.backgroundColor}
                btnClass="normal-btn login-btn"
                title="Logowanie"
                icon="fa-chevron-up"
              />

              <Button
                onClick={togleRegisterModal}
                color={motive.backgroundColor}
                btnClass="normal-btn register-btn"
                title="Rejestracja"
                icon="fa-registered"
              />
            </section>
          </div>
        </nav>
      )}
    </MotiveContext.Consumer>
  );
};

export default navbar;
