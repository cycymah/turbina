import React from 'react';
import './PlayerReleasesRelease.css';

// Одиночный релиз из массива релизов получает название
const PlayerMenuLyric = ({
  author,
  originalAuthor,
  songName,
  onClickSongSet,
  song,
}) => {
  // Функция передает данные о текущем кликнутом треке
  const handleSongClick = () => {
    onClickSongSet(song);
  };

  return (
    <li className="player__release-item" onClick={handleSongClick}>
      {author} feat. {originalAuthor} - {songName}
    </li>
  );
};

export default PlayerMenuLyric;
