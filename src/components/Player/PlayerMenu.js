import React from 'react';
import './PlayerMenu.css';
import PlayerMenuLyric from './PlayerMenuLyric';
import PlayerMenuReleases from './PlayerMenuReleases';
import classNames from 'classnames';

const PlayerMenu = ({
  isBoxOpen,
  toggleTextSongs,
  songs,
  songLyric,
  onClickSongSet,
}) => {
  const menuShow = classNames(
    'player__menu',
    {
      player__menu_show: isBoxOpen,
    },
    {
      player__menu_hide: !isBoxOpen,
    }
  );

  return (
    <div className={menuShow}>
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
