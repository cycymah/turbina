import React from 'react';
import './PlayerRelisesRelise.css';

// Одиночный релиз из массива релизов получает название
const PlayerMenuLyric = ({ textSong }) => {
  return <li className="player__relise-item">{textSong}</li>;
};

export default PlayerMenuLyric;
