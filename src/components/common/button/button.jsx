import React from 'react'
import './button.scss';

const button = ({title, icon, btnClass, color, onClick}) => (
    <button onClick={onClick} style={{color: color}} className={`btn ${btnClass}`}>
        {icon && 
            <i className={`fa ${icon}`}></i>
        }
        {title && 
            <span>
                {title}
            </span>
        }
    </button>
);

export default button;