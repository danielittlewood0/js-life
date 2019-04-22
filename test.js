import Board from './board.js'
const assert = require('assert')

it('should initialise with a board if given (height,width)', () => {
  var board = new Board(2,3);
  assert.deepEqual([],[])
  assert.deepEqual(board.board,[[0,0,0],[0,0,0]])
})
