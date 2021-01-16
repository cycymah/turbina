import React from 'react';
import './PlayerMenuLyric.css';

const PlayerMenuLyric = ({ songLyric }) => {
  // Делаем текс песни с новой строки по ключу \n
  const currentSong = songLyric.split('\n').map((str, i) => (
    <p className="player__lyric" key={'iv' + i}>
      {str}
    </p>
  ));

  return <div className="player__lyric-text-box">{currentSong}</div>;
};

export default PlayerMenuLyric;
