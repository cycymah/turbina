import React, { useState, useEffect, createRef, useContext } from 'react';
import useInterval from '@use-it/interval';
import './Player.css';
import classNames from 'classnames';
import PlayerMenu from './PlayerMenu';
import { ContextSongsData } from '../../contexts/ContextSongsData';

const Player = () => {
  const songsList = useContext(ContextSongsData);
  let audioElement = createRef();

  const [isSongPlay, setSongPlay] = useState(false);
  const [songTime, setSongTime] = useState('');
  const [currentSongTime, setCurrentSongTime] = useState(0);
  const [styleSeekerCover, setSeekerCover] = useState('0%');
  const [isSongListOpen, setSongListOpen] = useState(false);
  const [lyricSongsToggle, changeLyricSongs] = useState(false);

  // Начальное состояние - заглавная песня на странице, первая песня в массиве песен
  const [currenSongPlay, setCurrentSongPlay] = useState({
    author: songsList[0].author,
    originalAuthor: songsList[0].originalAuthor,
    songName: songsList[0].songName,
    src: songsList[0].src,
    type: songsList[0].type,
    id: songsList[0].id,
    lyric: songsList[0].lyric,
  });

  const buttonPlayStopClasses = classNames(
    'player__play-btn',
    'player__play-btn_play',
    { 'player__play-btn_pause': isSongPlay }
  );

  const buttonShowPlaylist = classNames(
    'player__control-btn',
    'player__control-btn_open',
    {
      'player__control-btn_close': isSongListOpen,
    }
  );

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
    console.log(audioElement.duration);
    let seekerCoverLength = (currentSongTime * 100) / audioElement.duration;
    setSeekerCover(seekerCoverLength);
    setSongTime(songDuration);
  };

  // Меняем стейт по щелчку на плей
  const handlePlayCLick = () => setSongPlay(!isSongPlay);

  // Меняем блок релизов на песни
  const toggleLyricSongs = () => changeLyricSongs(!lyricSongsToggle);

  // Открываем лист с песнями
  const handleSongsList = () => setSongListOpen(!isSongListOpen);

  // Смена трека в источнике audio
  const handleNewTrack = () => {
    audioElement.pause();
    audioElement.load();
    setSongPlay(false);
    setSongTime('');
    setSeekerCover('0%');
  };

  // Переключаем точку проигрывания песни
  const handleSeekerClick = (evt) => {
    audioElement.currentTime =
      ((evt.pageX -
        evt.target.closest('.player__seeker').getBoundingClientRect().x) *
        audioElement.duration) /
      evt.target.closest('.player__seeker').getBoundingClientRect().width;
    onTimeUpdateSongTime();
  };

  // Функция выбора песни из списка
  const handleSetCurrentSong = (song) => {
    setCurrentSongPlay({
      author: song.author,
      originalAuthor: song.originalAuthor,
      songName: song.songName,
      src: song.src,
      type: song.type,
      id: song.id,
      lyric: song.lyric,
    });
    handleNewTrack();
  };

  return (
    <section className="player">
      <audio
        // preload="metadata"
        onLoadedData={console.log(1)}
        className="player__audio"
        ref={(audio) => (audioElement = audio)}
        onTimeUpdate={onTimeUpdateSongTime}>
        {/* onTrackChange={handleNewTrack} */}
        <source src={currenSongPlay.src} type={currenSongPlay.type}></source>
      </audio>

      {/* кнопка плей/пауза */}
      <button
        onClick={handlePlayCLick}
        type="button"
        className={buttonPlayStopClasses}></button>

      {/* Контейнер с плеером */}
      <div
        className="player__container"
        style={{ margin: `0 0 ${isSongListOpen ? '30px' : ''} 0` }}>
        <div className="player__control-box">
          <div className="player__seeker-info-box">
            <div className="player__info-box">
              <p className="player__song-info">
                {currenSongPlay.author} feat. {currenSongPlay.originalAuthor} -{' '}
                {currenSongPlay.songName}
              </p>
              <span className="player__song-time">{songTime || ''}</span>
            </div>

            <div className="player__seeker" onClick={handleSeekerClick}>
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
          songLyric={currenSongPlay.lyric}
          onClickSongSet={handleSetCurrentSong}
        />
      </div>

      {/* Кнопка для выплывания списка песен/текстов */}
      <button
        type="button"
        className={buttonShowPlaylist}
        onClick={handleSongsList}></button>
    </section>
  );
};
export default Player;
