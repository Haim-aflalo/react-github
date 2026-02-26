import { createContext, useState } from 'react';

const GameContext = createContext();

function GameProvider({ children }) {
  const [isWin, setIsWin] = useState(0);
  const [bombs, setBombs] = useState(0);
  const [isLose, setIsLose] = useState(0);

  return (
    <GameContext
      value={{
        isWin,
        setIsWin,
        bombs,
        setBombs,
        isLose,
        setIsLose,
      }}
    >
      {children}
    </GameContext>
  );
}

export { GameContext, GameProvider };
