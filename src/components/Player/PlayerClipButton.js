import React from 'react';
import './PlayerClipButton.css';
import logo from '../../images/player/arrow.png';

const PlayerClipButton = ({ clipUrl }) => {
  return (
    <a className="player__clip" href={clipUrl} target="_blank" rel="noreferrer">
      <img className="player__clip-icon" src={logo} alt="кнопка проигрывания" />
      <p className="player__clip-text">Клип</p>
    </a>
  );
};
export default PlayerClipButton;
