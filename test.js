import Board from './board.js'
const assert = require('assert')

it('should initialise with a board if given (width,height)', () => {
  var board = new Board(2,3);
  assert.deepEqual([],[])
  assert.deepEqual(board.board,[[0,0,0],[0,0,0]])
})

describe('#advanceSquare', () => {
  it('dead board stays dead', () => {
    var board = new Board(3,3);
    board.board = [[0,0,0],[0,0,0],[0,0,0]]
    assert.equal(board.advanceSquare(1,1),0)
  })
  it('underpopulation', () => {
    var board = new Board(3,3);
    board.board = [[0,0,1],[0,1,0],[0,0,0]]
    assert.equal(board.advanceSquare(1,1),0)
  })
  it('stay alive if 2 nbs', () => {
    var board = new Board(3,3);
    board.board = [[0,0,1],[1,1,0],[0,0,0]]
    assert.equal(board.advanceSquare(1,1),1)
  })
  it('stay dead if 2 nbs', () => {
    var board = new Board(3,3);
    board.board = [[0,0,1],[1,0,0],[0,0,0]]
    assert.equal(board.advanceSquare(1,1),0)
  })
  it('birth if 3 nbs', () => {
    var board = new Board(3,3);
    board.board = [[0,1,1],[0,0,1],[0,0,0]]
    assert.equal(board.advanceSquare(1,1),1)
  })
  it('overpopulation', () => {
    var board = new Board(3,3);
    board.board = [[1,1,1],[1,1,1],[1,1,1]]
    assert.equal(board.advanceSquare(1,1),0)
  })
})
