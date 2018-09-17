import React from 'react'
import './link.scss';
import { NavLink } from 'react-router-dom';

const link = ({title, path, icon, mainClass}) => (
    <NavLink className={`link ${mainClass}`} to={path} exact activeClassName="active-link">
        {icon && <i className={"fa " + icon}></i>}
        {title && <span>{title}</span>}
    </NavLink>
);

export default link;