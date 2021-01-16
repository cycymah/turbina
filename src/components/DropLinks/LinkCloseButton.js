import React from 'react';
import { COLOR as color } from '../../constants/color';
import CloseIcon from './CloseIcon.js';

function LinkCloseButton({ onClick }) {

  const [pos, setPos] = React.useState(-60);
  const [isVisible, setIsVisible] = React.useState(0);

  React.useEffect(() => {
    setPos(0);
    setIsVisible(1);
  }, [])

  const shiftTrans = `translateY(${pos}px)`;
  const cssRules = {
    opacity: isVisible,
    transform: shiftTrans,
    borderColor: color
  };

  return (
    <button style={cssRules} className="droplinks__close-button" onClick={onClick}>
      <CloseIcon />
    </button>
  );
}
export default LinkCloseButton;
