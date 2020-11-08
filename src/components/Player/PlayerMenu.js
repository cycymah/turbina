import React from 'react';
import './PlayerMenu.css';
import PlayerMenuLyric from './PlayerMenuLyric';
import PlayerMenuReleases from './PlayerMenuReleases';
import songsList from '../../constants/songsList';

const PlayerMenu = ({ isBoxOpen, toggleTextSongs }) => {
  return (
    <div
      className={`player__menu ${
        isBoxOpen ? 'player__menu_show ' : 'player__menu_hide'
      }`}>
      <h1 className="player__menu-title">
        {toggleTextSongs ? 'Текст песни:' : 'Релизы:'}
      </h1>
      {toggleTextSongs ? (
        <PlayerMenuLyric />
      ) : (
        <PlayerMenuReleases songsList={songsList} />
      )}
    </div>
  );
};

export default PlayerMenu;
