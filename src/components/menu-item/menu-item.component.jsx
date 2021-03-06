import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => (
    <div 
        className={`${size} menu-item`}
        style={{
            backgroundImage: `url(${imageUrl})`
        }}    
    >
        <div className='background-image' />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <h1 className="subtitle">SHOP NOW</h1>
        </div>
    </div>
)

export default MenuItem