import React from 'react';

import './menu-item.styles.scss';

//podria usar (props), pero uso ({title}) porque lo destructuro
const MenuItem = ({ title, imageUrl, size }) => (  //si tiene el size lo usa, sino no pasa nada
    <div style={{
        backgroundImage: `url(${imageUrl})`
    }}
     className={`${size} menu-item`}>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;