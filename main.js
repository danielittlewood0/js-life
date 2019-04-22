var board = new Board(8,8);
board.board = [
  [0,1,0,0,0,0,0,0],
  [0,0,1,0,0,0,0,0],
  [1,1,1,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0]
]
console.log(board);
setInterval( () => {
  board.advance();
  console.log(board);
}, 1000)
//console.log(board.inBoard(0,1))
//console.log(board.neighbours(0,0))
//console.log(board.aliveNbrs(0,0))
//console.log(board.advance())

