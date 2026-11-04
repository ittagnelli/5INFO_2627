const WINNING_COMBINATIONS = [
  [0, 1, 2], // Righe
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], // Colonne
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], // Diagonali
  [2, 4, 6]
];

export function checkWinner(board) {
  for (const combo of WINNING_COMBINATIONS) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return {
        winner: board[a],
        line: combo
      };
    }
  }
  return null;
}