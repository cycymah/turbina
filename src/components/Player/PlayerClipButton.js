import React from 'react';
import './PlayerClipButton.css';
import logo from '../../images/player/arrow.png';

const PlayerClipButton = ({ clipUrl }) => {
  console.log(clipUrl);
  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a className="player__clip" href={clipUrl} target="_blank">
      <img className="player__clip-icon" src={logo} alt="кнопка проигрывания" />
      <p className="player__clip-text">Клип</p>
    </a>
  );
};
export default PlayerClipButton;
