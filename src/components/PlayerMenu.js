import React from 'react';
import './PlayerMenu.css';
// import { TransitionGroup } from 'react-transition-group'; // ES6
import PlayerMenuLyric from './PlayerMenuLyric';
import PlayerMenuRelises from './PlayerMenuRelises';
import songsList from '../constants/songsList.js';

const PlayerMenu = ({ isBoxOpen, toggleTextSongs }) => {
  return (
    <div
      className={`player__menu ${
        isBoxOpen ? 'player__menu_show ' : 'player__menu_hide'
      }`}>
      <h1 className="player__song-title">
        {toggleTextSongs ? 'Текст песни:' : 'Релизы'}
      </h1>

      {/* <TransitionGroup
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}> */}
      {toggleTextSongs ? (
        <PlayerMenuLyric />
      ) : (
        <PlayerMenuRelises songsList={songsList} />
      )}
      {/* </TransitionGroup> */}
    </div>
  );
};

export default PlayerMenu;
