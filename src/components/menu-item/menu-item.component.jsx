import React from 'react';

import './menu-item.styles.scss';

//podria usar (props), pero uso ({title}) porque lo destructuro
const MenuItem = ({ title, imageUrl, size }) => (  //si tiene el size lo usa, sino no pasa nada
    <div className={`${size} menu-item`}>
        <div 
            className='background-image' 
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;