export function createBoard() {
  const board = [];
  for (let i = 0; i < 80; i++) {
    board.push({ type: 'cell', status: 'hidden-cell' });
  }

  const indexes = new Set();
  while (indexes.size < 10) {
    indexes.add(Math.floor(Math.random() * 80));
  }
  indexes.forEach((index) => {
    board[index] = { type: 'bomb', status: 'hidden-cell' };
  });
  return board;
}

// export function createBoard() {
//   const board = [];
//   for (let i = 0; i < 80; i++) {
//     board.push('cell');
//   }
//   return board;
// }

// export function generateIndex() {
//   const indexes = new Set();
//   while (indexes.size < 10) {
//     indexes.add(Math.floor(Math.random() * 80));
//   }
//   return [...indexes];
// }
