import React, { useState, useEffect, createRef } from 'react';
import './Player.css';
import song from '../Float.mp3';
import useInterval from '@use-it/interval';
import PlayerMenu from './PlayerMenu';

const Player = () => {
  const [isSongPlay, setSongPlay] = useState(false);
  const [songTime, setSongTime] = useState('');
  const [currentSongTime, setCurrentSongTime] = useState(0);
  const [styleSeekerCover, setSeekerCover] = useState('0%');
  const [isSongListOpen, setSongListOpen] = useState(false);

  let audioElement = createRef();

  // Работа плей/стоп
  useEffect(() => {
    isSongPlay ? audioElement.play() : audioElement.pause();
  }, [isSongPlay]);

  // Задаем время в стейте
  useInterval(
    () => {
      setCurrentSongTime(audioElement.currentTime);
    },
    isSongPlay ? 500 : null
  );

  // Меняем строку состояния и время в плеере
  const onTimeUpdateSongTime = () => {
    let songDuration =
      Math.round(currentSongTime / 60) + ':' + Math.round(currentSongTime);
    let seekerCoverLength = (currentSongTime * 100) / audioElement.duration;
    setSeekerCover(seekerCoverLength);
    setSongTime(songDuration);
  };

  // Меняем стейт по щелчку на плей
  const handlePlayCLick = () => {
    isSongPlay ? setSongPlay(false) : setSongPlay(true);
  };

  // Открываем лист с песнями
  const handleSongsList = () => {
    isSongListOpen ? setSongListOpen(false) : setSongListOpen(true);
  };

  return (
    <section className="player">
      <audio
        className="player__audio"
        ref={(audio) => (audioElement = audio)}
        onTimeUpdate={onTimeUpdateSongTime}>
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
        <div className="player__menu">
          <PlayerMenu />
        </div>
      </div>
      <button
        type="button"
        className={`player__control-btn ${
          isSongListOpen
            ? 'player__control-btn_close'
            : 'player__control-btn_open'
        }`}
        onClick={handleSongsList}></button>
    </section>
  );
};
export default Player;
