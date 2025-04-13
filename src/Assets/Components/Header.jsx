/** @jsxImportSource @emotion/react */
import React from 'react';
import Video from "./Video";
import { headerStyles } from './HeaderStyles';

function Header() {
  return (
    <div className='header-pic' id='header' css={headerStyles}>
      
      <div id="main">
        <div className='header-heading'>
          <h2>STEP UP YOUR</h2>
          <h1><span>FITNESS</span> WITH US</h1>
          <p className="details">BUILD YOUR BODY AND FITNESS WITH PROFESSIONAL TOUCH</p>
          <div className="header-btns">
            <a href="#" className='header-btn'>JOIN US</a>
          </div>
        </div><Video />
      </div>
    </div>
  );
}

export default Header;
