import { useContext, useState, useEffect } from 'react';
import { GameContext } from '../context/GameProviders';

function GameInfos() {
  const { bombs } = useContext(GameContext);
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(2);
  const [time, setTime] = useState(true);

  useEffect(() => {
    if (time) {
      setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);

      if (seconds === -1 && minutes >= 1) {
        setMinutes(minutes - 1);
        setSeconds(seconds + 60);
      } else if (seconds === 1 && minutes === 0) {
        setTime(false);
      }
    }
  }, [minutes, seconds]);
  return (
    <div className="game-infos">
      <div className="card">
        <div className="bomb-logo"></div>
        <p>Bombs Remaining</p>
        <div>{bombs}</div>
      </div>
      <div className="card">
        <div className="time-logo"></div>
        <p>Bombs Remaining</p>
        <div>
          {minutes}:{seconds}
        </div>
      </div>
      <div className="card">
        <div className="size-logo"></div>
        <p>Board Size</p>
        <div>10×8</div>
      </div>
      <div></div>
      <div></div>
      <h3>Locate and neutralize all bombs before time run out</h3>
    </div>
  );
}

export default GameInfos;
