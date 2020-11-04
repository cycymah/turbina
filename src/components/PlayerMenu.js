import React from 'react';
import './PlayerMenu.css';
import PlayerMenuLyric from './PlayerMenuLyric';

const PlayerMenu = ({ isBoxOpen, toggleTextSongs }) => {
  return (
    <div
      className={`player__menu ${
        isBoxOpen ? 'player__menu_show ' : 'player__menu_hide'
      }`}>
      <h1 className="player__song-title">
        {toggleTextSongs ? 'Текст песни:' : 'Релизы'}
      </h1>
      {toggleTextSongs ? <PlayerMenuLyric /> : <div>Список релизов</div>}
    </div>
  );
};

export default PlayerMenu;
