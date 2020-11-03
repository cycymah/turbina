import React, { useState, useEffect, createRef } from 'react';
import './Player.css';
import song from '../Float.mp3';

const Player = () => {
  const [isSongPlay, setSongPlay] = useState(false);
  const [songTime, setSongTime] = useState();
  const [currentSongTime, setCurrentSongTime] = useState(0);
  const [styleSeekerCover, setSeekerCover] = useState('0%');

  let audioElement = createRef();

  useEffect(() => {
    if (isSongPlay) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  }, [isSongPlay]);
  useEffect(() => {
    setCurrentSongTime(audioElement.currentTime);
  });

  const onTimeUpdateTimer = () => {
    let songDuration =
      Math.round(currentSongTime / 60) + ':' + Math.round(currentSongTime);
    setSongTime(songDuration);
    setSeekerCover((currentSongTime * 100) / audioElement.duration);
  };

  const handlePlayCLick = () => {
    setCurrentSongTime(audioElement.currentTime);
    isSongPlay ? setSongPlay(false) : setSongPlay(true);
  };

  return (
    <section className="player">
      <audio
        className="player__audio"
        ref={(audio) => (audioElement = audio)}
        onTimeUpdate={onTimeUpdateTimer}>
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
      <div className="player__container">
        <div className="player__info-box">
          <p className="player__song-info">Песня sdfsdf</p>
          <span className="player__song-time">{songTime ? songTime : ''}</span>
        </div>
        <div className="player__range-box">
          <div className="player__seeker">
            <div
              className="player__seeker-cover"
              style={{ width: `${styleSeekerCover}%` }}></div>
          </div>
        </div>
        <div className="player__songs-list"></div>
      </div>
      <button type="button" className="player__control-btn"></button>
    </section>
  );
};
export default Player;
