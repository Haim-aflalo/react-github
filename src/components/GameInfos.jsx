import { useContext } from 'react';
import { GameContext } from '../context/GameProviders';
import Card from './Card';

function GameInfos() {
  const { bombs, time } = useContext(GameContext);

  return (
    <div className="game-infos">
      {[
        { name: 'bomb', title: 'Bombs Remaining', infos: bombs },
        { name: 'time', title: 'Time Remaining', infos: time },
        {
          name: 'size',
          title: 'Board Size',
          infos: '10x8',
        },
      ].map((card) => (
        <Card name={card.name} title={card.title} infos={card.infos} />
      ))}
      <h3>Locate and neutralize all bombs before time run out</h3>
    </div>
  );
}

export default GameInfos;
