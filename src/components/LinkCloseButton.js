import React from 'react';
import closeIconPath from '../images/close-icon.svg'

function LinkCloseButton({onClick}) {
  return (
    <button className="linkCloseButton" onClick={onClick}>
      <img src={closeIconPath} alt=""/>
    </button>
  );
}
export default LinkCloseButton;
