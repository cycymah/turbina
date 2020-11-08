import React from 'react';
import './PlayerMenuReleases.css';
import PlayerReleasesRelease from './PlayerReleasesRelease';

// Блок со списком релизов, принимает массив объектов всех
// релизов и рендерит каждый релиз или показывает сообщения о их отсутствии
const PlayerMenuLyric = ({ songsList }) => {
  if (songsList.length === 0) {
    return (
      <span className="player__release-message">Пока у нас только 1 релиз</span>
    );
  }
  return (
    <ul className="player__releases-list">
      {songsList.map((song) => {
        return <PlayerReleasesRelease textSong={song.name} key={song.id} />;
      })}
    </ul>
  );
};

export default PlayerMenuLyric;
