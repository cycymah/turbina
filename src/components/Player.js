import React, { useState, useEffect, createRef } from 'react';
import useInterval from '@use-it/interval';
import './Player.css';
import PlayerMenu from './PlayerMenu';
import song from '../Float.mp3';
import songsList from '../constants/songsList';

const Player = () => {
  const [isSongPlay, setSongPlay] = useState(false);
  const [songTime, setSongTime] = useState('');
  const [currentSongTime, setCurrentSongTime] = useState(0);
  const [styleSeekerCover, setSeekerCover] = useState('0%');
  const [isSongListOpen, setSongListOpen] = useState(false);
  const [lyricSongs, changeLyricSongs] = useState(false);

  let audioElement = createRef();

  // Работа плей/стоп
  useEffect(() => {
    isSongPlay ? audioElement.play() : audioElement.pause();
  }, [isSongPlay]);

  // Задаем время в стейте
  useInterval(
    () => {
      console.log(currentSongTime);
      setCurrentSongTime(audioElement.currentTime);
    },
    isSongPlay ? 500 : null
  );

  // Меняем строку состояния и время в плеере
  const onTimeUpdateSongTime = () => {
    let songDuration =
      Math.floor(currentSongTime / 60) + ':' + Math.round(currentSongTime % 60);
    let seekerCoverLength = (currentSongTime * 100) / audioElement.duration;
    setSeekerCover(seekerCoverLength);
    setSongTime(songDuration);
  };

  // Меняем стейт по щелчку на плей
  const handlePlayCLick = () => {
    console.log(songsList.first.src);
    isSongPlay ? setSongPlay(false) : setSongPlay(true);
  };

  const toggleLyricSongs = () => {
    lyricSongs ? changeLyricSongs(false) : changeLyricSongs(true);
  };

  // Открываем лист с песнями
  const handleSongsList = () => {
    isSongListOpen ? setSongListOpen(false) : setSongListOpen(true);
  };

  return (
    <section
      className="player"
      style={{ margin: `${isSongListOpen ? '100px' : '200px'} auto 0` }}>
      <audio
        className="player__audio"
        ref={(audio) => (audioElement = audio)}
        onTimeUpdate={onTimeUpdateSongTime}>
        Your browser does not support the
        <code>audio</code> element.
        <source src={song} type={songsList.first.type}></source>
      </audio>

      {/* кнопка плей/пауза */}
      <button
        onClick={handlePlayCLick}
        type="button"
        className={`player__play-btn ${
          isSongPlay ? 'player__play-btn_pause' : 'player__play-btn_play'
        }`}></button>

      {/* Контейнер с плеером */}
      <div className="player__container">
        <div className="player__info-box">
          <p className="player__song-info">{songsList.first.name}</p>
          <span className="player__song-time">{songTime ? songTime : ''}</span>
        </div>
        <div className="player__range-box">
          <div className="player__seeker">
            <div
              className="player__seeker-cover"
              style={{ width: `${styleSeekerCover}%` }}></div>
          </div>
        </div>
        <PlayerMenu isBoxOpen={isSongListOpen} toggleTextSongs={lyricSongs} />
      </div>

      {/* Условный рентеринг кнопки для смены текста/списка песен внутри бокса */}
      {isSongListOpen ? (
        <button
          className={`player__switch-btn ${
            isSongListOpen ? '' : 'player__switch-btn_close'
          }`}
          onClick={toggleLyricSongs}>
          {lyricSongs ? 'Текст' : 'Релизы'}
        </button>
      ) : (
        <div className="player__close-box"></div>
      )}

      {/* Кнопка для выплывания списка песен/текстов */}
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
