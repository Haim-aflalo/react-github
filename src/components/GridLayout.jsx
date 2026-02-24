import { useContext, useEffect, useState } from 'react';
import { GameContext } from '../context/GameProviders';
import { createBoard, generateIndex } from './utils';

function GridLayout() {
  const { isWin, setIsWin, bombs, setBombs } = useContext(GameContext);
  const [board, setBoard] = useState([]);
  const [bombsIndex, setBombsIndex] = useState([]);
  const [bombsFound, setBombsFound] = useState([]);
  console.log(bombsIndex);

  useEffect(() => {
    const newBoard = createBoard();
    const newBombsIndex = generateIndex();
    setBoard(newBoard);
    setBombsIndex(newBombsIndex);
    setBombs(newBombsIndex.length);
  }, []);

  function cellClick(index) {
    if (isWin) return;
    if (bombsIndex.includes(index) && !bombsFound.includes(index)) {
      setBombs(bombs - 1);
      setBombsFound([...bombsFound, index]);
      console.log(bombsFound, index, board);
      setBoard(
        board.map((cell, newIndex) =>
          bombsFound.includes(newIndex) ? 'bomb-cell' : 'cell',
        ),
      );
    } else {
      setBoard(
        board.map((cell, newIndex) => (index === newIndex ? 'false' : 'cell')),
      );
    }
  }

  return (
    <div className="game-board">
      {board.map((cell, index) => (
        <button key={index} className={cell} onClick={() => cellClick(index)}>
          {index}
        </button>
      ))}
    </div>
  );
}

export default GridLayout;
