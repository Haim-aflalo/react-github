import { createContext, useState } from 'react';

const GameContext = createContext();

function GameProvider({ children }) {
  const [isWin, setIsWin] = useState(0);
  const [bombs, setBombs] = useState(0);
  const [time, setTime] = useState(0);

  return (
    <GameContext
      value={{
        isWin,
        setIsWin,
        bombs,
        setBombs,
        time,
        setTime,
      }}
    >
      {children}
    </GameContext>
  );
}

export { GameContext, GameProvider };
