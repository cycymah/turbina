import React from 'react';
import './PlayerMenu.css';
import PlayerMenuLyric from './PlayerMenuLyric';

const PlayerMenu = ({ isBoxOpen, songTitle }) => {
  return (
    <div
      className={`player__menu ${
        isBoxOpen ? 'player__menu_show ' : 'player__menu_hide'
      }`}>
      <h1 className="player__song-title">{songTitle}</h1>;
      <PlayerMenuLyric />
    </div>
  );
};

export default PlayerMenu;
