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
                <nav id="navbar">
                    <div className="btns">
                        <Link path="/" icon="fa-home" color={motive.backgroundColor} />
                        <section>
                            <Link path="/about" title="O nas" color={motive.backgroundColor}/>
                            <Link path="/contact" title="Kontakt" color={motive.backgroundColor}/>
                            <Link path="/register" title="Rejestracja" color={motive.backgroundColor}/>
                            <Link path="/login" title="Logowanie" color={motive.backgroundColor}/>
                        </section>
                    </div>
                    <figure className="shadow">
                        <div style={{backgroundImage: `url(${NavBackground})`}}>
                        </div>
                    </figure>
                </nav>
            )}
        </MotiveContext.Consumer>
    );
}

export default navbar;