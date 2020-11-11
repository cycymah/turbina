import React, { useContext } from 'react';
import './PlayerMenuReleases.css';
import PlayerReleasesRelease from './PlayerReleasesRelease';
import { ContextSongsData } from '../../contexts/ContextSongsData';

// Блок со списком релизов, принимает массив объектов всех
// релизов и рендерит каждый релиз или показывает сообщения о их отсутствии
const PlayerMenuLyric = ({ onClickSongSet }) => {
  const songsList = useContext(ContextSongsData);

  if (songsList.length === 0) {
    return (
      <span className="player__release-message">Пока у нас только 1 релиз</span>
    );
  }
  return (
    <ul className="player__releases-list">
      {/* Рендерим список треков */}
      {songsList.map((song) => {
        return (
          <PlayerReleasesRelease
            song={song}
            author={song.author}
            originalAuthor={song.originalAuthor}
            songName={song.songName}
            key={song.id}
            onClickSongSet={onClickSongSet}
          />
        );
      })}
    </ul>
  );
};

export default PlayerMenuLyric;
