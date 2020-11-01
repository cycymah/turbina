import React from 'react';
import './Player.css';

const Player = () => {
  return (
    <section className="section">
      <div className="player">
        <div className="player__control-section">
          <div className="player__play-btn"></div>
          <p>Песня</p>
          <div className="player__control-btn"></div>
          <input type="range" className="player__seeker"></input>
        </div>
      </div>
      <audio controls>
        <source src="../Float.mp3" type="audio/mpeg"></source>
      </audio>
    </section>
  );
};
export default Player;
