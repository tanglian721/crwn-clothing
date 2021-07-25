import React from "react";

import "./menu-item.style.scss";

const MenuItem = ({ title, imageUrl, size }) => (
  <div
    className={`${size} menu-item`} //dynamic class name
  >
    <div className='background-image' style={
        { backgroundImage: `url(${imageUrl})` } //can set dynamic value or iamge
      }/>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
