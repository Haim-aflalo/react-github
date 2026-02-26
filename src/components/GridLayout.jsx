import { useContext, useEffect, useState } from 'react';
import { GameContext } from '../context/GameProviders';
import { createBoard } from './utils';

function GridLayout() {
  const { isWin, setIsWin, bombs, setBombs } = useContext(GameContext);
  const [board, setBoard] = useState([]);

  useEffect(() => {
    const newBoard = createBoard();
    setBoard(newBoard);
    setBombs(10);
  }, []);

  function cellClick(index) {
    if (isWin) return;
    setBoard(
      board.map((cell, clickIndex) => {
        if (clickIndex === index) {
          return {
            ...cell,
            status: cell.type === 'bomb' ? 'bomb-cell' : 'false',
          };
        }
        return cell;
      }),
    );
    if (board[index].type === 'bomb' && board[index].status === 'hidden-cell') {
      if (bombs - 1 === 0) {
        setBombs((prev) => prev - 1);
        setIsWin(true);
      } else {
        setBombs((prev) => prev - 1);
      }
    }
  }

  return (
    <div className="game-board">
      {board.map((cell, index) => (
        <button
          key={index}
          className={cell.status}
          onClick={() => cellClick(index)}
        ></button>
      ))}
    </div>
  );
}

export default GridLayout;
