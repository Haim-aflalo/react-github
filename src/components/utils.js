export function createBoard() {
  const board = [];
  for (let i = 0; i < 80; i++) {
    board.push('cell');
  }
  return board;
}

export function generateIndex() {
  const indexes = new Set();
  while (indexes.size < 10) {
    indexes.add(Math.floor(Math.random() * 80));
  }
  return [...indexes];
}
