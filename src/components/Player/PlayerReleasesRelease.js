import React from 'react';
import './PlayerReleasesRelease.css';

// Одиночный релиз из массива релизов получает название
const PlayerMenuLyric = ({ textSong }) => {
  return <li className="player__release-item">{textSong}</li>;
};

export default PlayerMenuLyric;
