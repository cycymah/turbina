/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import './Player.css';
import song from '../Float.mp3';

const Player = () => {
  const [isSongPlay, setSongPlay] = useState(false);
  const [songTime, setSongTime] = useState('');

  useEffect(() => {
    const audioFile = document.querySelector('.player__audio');
    if (isSongPlay) {
      audioFile.play();
    } else {
      audioFile.pause();
    }
  }, [isSongPlay]);

  useEffect(() => {
    // console.log(audioFile);
    setSongTime(1);
    // console.log(audioFile.duration);
  }, [songTime]);

  const handlePlayCLick = () => {
    isSongPlay ? setSongPlay(false) : setSongPlay(true);
  };

  return (
    <section className="player">
      <audio className="player__audio">
        Your browser does not support the
        <code>audio</code> element.
        <source src={song} type="audio/mp3"></source>
      </audio>
      <button
        onClick={handlePlayCLick}
        type="button"
        className={`player__play-btn ${
          isSongPlay ? 'player__play-btn_pause' : 'player__play-btn_play'
        }`}></button>
      <p className="player__song-info">Песня sdfsdf</p>
      <span className="player__song-time">2:30</span>
      <input type="range" className="player__seeker" />
      <div className="player__songs-list"></div>
      <button type="button" className="player__control-btn"></button>
    </section>
  );
};
export default Player;
