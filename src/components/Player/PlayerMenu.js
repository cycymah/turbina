import React from 'react';
import './PlayerMenu.css';
import PlayerMenuLyric from './PlayerMenuLyric';
import PlayerMenuReleases from './PlayerMenuReleases';

const PlayerMenu = ({
  isBoxOpen,
  toggleTextSongs,
  songs,
  songLyric,
  onClickSongSet,
}) => {
  return (
    <div
      className={`player__menu ${
        isBoxOpen ? 'player__menu_show ' : 'player__menu_hide'
      }`}>
      <h2 className="player__menu-title">
        {toggleTextSongs ? 'Текст песни:' : 'Релизы:'}
      </h2>
      {toggleTextSongs ? (
        <PlayerMenuLyric songLyric={songLyric} />
      ) : (
        <PlayerMenuReleases songsList={songs} onClickSongSet={onClickSongSet} />
      )}
    </div>
  );
};

export default PlayerMenu;
