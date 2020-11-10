import React from 'react';
import './PlayerClipButton.css';
import logo from '../../images/player/arrow.png';

const PlayerClipButton = () => {
    return (
        <button className="player__clip">
            <img className="player__clip-icon" src={logo} alt="кнопка проигрывания"/>
            <p className="player__clip-text">Клип</p>
        </button>
    );
}
export default PlayerClipButton;
