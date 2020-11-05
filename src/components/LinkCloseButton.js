import React from 'react';
import { COLOR as color } from '../constants/color';
//import closeIconPath from '../images/close-icon.svg'

function LinkCloseButton({ onClick }) {

  const [pos, setPos] = React.useState(-60);
  const [isVisible, setIsVisible] = React.useState(0);

  React.useEffect(() => {
    setPos(0);
    setIsVisible(1);
    return () => {
      setPos(-60);
      setIsVisible(0);
    };
  }, [])

  const shiftTrans = `translateY(${pos}px)`;
  const cssRules = {
    opacity: isVisible,
    transform: shiftTrans,
    borderColor: color
  };

  return (
    <button style={cssRules} className="linkCloseButton" onClick={onClick}>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke={color} xmlns="http://www.w3.org/2000/svg">
        <line x1="0.707107" y1="1.19231" x2="10.6066" y2="11.0918" strokeWidth="2" />
        <line x1="10.6075" y1="0.707107" x2="0.708003" y2="10.6066" strokeWidth="2" />
      </svg>
    </button>
  );
}
export default LinkCloseButton;
