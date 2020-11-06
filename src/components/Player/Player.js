import React, { useState, useEffect, createRef } from 'react';
import useInterval from '@use-it/interval';
import './Player.css';
import PlayerMenu from './PlayerMenu';
import song from '../../Float.mp3';

const Player = () => {
  const [isSongPlay, setSongPlay] = useState(false);
  const [songTime, setSongTime] = useState('');
  const [currentSongTime, setCurrentSongTime] = useState(0);
  const [styleSeekerCover, setSeekerCover] = useState('0%');
  const [isSongListOpen, setSongListOpen] = useState(false);
  const [lyricSongsToggle, changeLyricSongs] = useState(false);

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
      Math.floor((audioElement.duration - currentSongTime) / 60) +
      ':' +
      (Math.round((audioElement.duration - currentSongTime) % 60) < 10
        ? 0
        : '') +
      Math.round((audioElement.duration - currentSongTime) % 60);
    let seekerCoverLength = (currentSongTime * 100) / audioElement.duration;
    setSeekerCover(seekerCoverLength);
    setSongTime(songDuration);
  };

  // Меняем стейт по щелчку на плей
  const handlePlayCLick = () => {
    isSongPlay ? setSongPlay(false) : setSongPlay(true);
  };

  // Меняем блок релизов на песни
  const toggleLyricSongs = () => {
    lyricSongsToggle ? changeLyricSongs(false) : changeLyricSongs(true);
  };

  // Открываем лист с песнями
  const handleSongsList = () => {
    isSongListOpen ? setSongListOpen(false) : setSongListOpen(true);
  };

  return (
    <section
      className="player"
      style={{ margin: `${isSongListOpen ? '100px' : '180px'} 0 0` }}>
      <audio
        className="player__audio"
        ref={(audio) => (audioElement = audio)}
        onTimeUpdate={onTimeUpdateSongTime}>
        <source src={song} type="audio/mp3"></source>
      </audio>

      {/* кнопка плей/пауза */}
      <button
        onClick={handlePlayCLick}
        type="button"
        className={`player__play-btn ${
          isSongPlay ? 'player__play-btn_pause' : 'player__play-btn_play'
        }`}></button>

      {/* Контейнер с плеером */}
      <div
        className="player__container"
        style={{ margin: `0 0 ${isSongListOpen ? '30px' : ''} 0` }}>
        <div className="player__control-box">
          <div className="player__seeker-info-box">
            <div className="player__info-box">
              <p className="player__song-info">Float SOng</p>
              <span className="player__song-time">
                {songTime ? songTime : ''}
              </span>
            </div>

            <div className="player__seeker">
              <div
                className="player__seeker-cover"
                style={{ width: `${styleSeekerCover}%` }}></div>
            </div>
          </div>
          {/* Условный рентеринг кнопки для смены текста/списка песен внутри бокса */}
          {isSongListOpen ? (
            <button className="player__switch-btn" onClick={toggleLyricSongs}>
              {lyricSongsToggle ? 'Релизы' : 'Текст песни'}
            </button>
          ) : null}
        </div>

        <PlayerMenu
          isBoxOpen={isSongListOpen}
          toggleTextSongs={lyricSongsToggle}
        />
      </div>

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
