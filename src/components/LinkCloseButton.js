import React from 'react';
import closeIconPath from '../images/close-icon.svg'

function LinkCloseButton({onClick}) {

  const [pos, setPos]=React.useState(-60);
  const [isVisible, setIsVisible] = React.useState(0);

  React.useEffect(()=>{
    setPos(0);
    setIsVisible(1);
    return()=>{
      setPos(-60);
      setIsVisible(0);
    };
  },[])

  const shiftTrans = `translateY(${pos}px)`;
  const cssRules = {
    opacity: isVisible,
    transform: shiftTrans,

  };

  return (
    <button style={cssRules} className="linkCloseButton" onClick={onClick}>
      <img src={closeIconPath} alt=""/>
    </button>
  );
}
export default LinkCloseButton;
