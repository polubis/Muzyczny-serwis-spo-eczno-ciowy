import React from 'react'
import './button.scss';

const button = ({title, icon}) => (
    <button className="btn">
        {title && 
            <span>
                {title}
            </span>
        }
        {icon && 
            <i className={icon}></i>
        }
    </button>
);

export default button;