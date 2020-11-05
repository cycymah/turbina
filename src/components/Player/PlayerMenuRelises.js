import React from 'react';
import './PlayerMenuRelises.css';
import PlayerRelisesRelise from './PlayerRelisesRelise';

// Блок со списком релизов, принимает массив объектов всех
// релизов и рендерит каждый релиз или показывает сообщения о их отсутствии
const PlayerMenuLyric = ({ songsList }) => {
  return songsList.length === 0 ? (
    <span className="player__relise-message">Пока у нас только 1 релиз</span>
  ) : (
    <ul className="player__relises-list">
      {songsList.map((song) => {
        return <PlayerRelisesRelise textSong={song.name} key={song.id} />;
      })}
    </ul>
  );
};

export default PlayerMenuLyric;
