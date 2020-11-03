import React from 'react';
import './PlayerMenu.css';

const PlayerMenu = ({ isBoxOpen }) => {
  return (
    <ul
      className={`player__menu ${
        isBoxOpen ? 'player__menu_show ' : 'player__menu_hide'
      }`}>
      <li className="one">Песня 1</li>
      <li>Песня 2</li>
      <li> Песяня 3</li>
      <li> Песяня 3</li>
      <li> Песяня 3</li>
      <li> Песяня 3</li>
      <li> Песяня 3</li>
    </ul>
  );
};

export default PlayerMenu;
