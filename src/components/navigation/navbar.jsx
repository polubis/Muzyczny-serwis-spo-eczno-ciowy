import React from 'react'
import './navbar.scss';
import { MotiveContext } from '../../services/contextAPI/context';
import NavBackground from '../../assets/home_nav_background.jpg';
import Button from '../common/button/button';
import Link from '../common/link/link';

const navbar = () => {
    return (
        <MotiveContext.Consumer>
            {motive => (
                <nav id="navbar" style={{color: motive.fontColor}}>
                    <div className="btns">
                        <Link path="/" icon="fa-home" motive={motive} />

                        <section>
                            <Link path="/about" title="O nas"/>
                            <Link path="/contact" title="Kontakt" />
                            <Link path="/register" title="Rejestracja" />
                            <Link path="/login" title="Logowanie" />
                        </section>
                    </div>
                    <div className="space"></div>
                    <figure>
                        <div style={{backgroundImage: `url(${NavBackground})`}}>
                        </div>
                    </figure>
                </nav>
            )}
        </MotiveContext.Consumer>
    );
}

export default navbar;