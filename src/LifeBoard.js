import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Board from './Board.js';

class LifeBoard extends Component{
  constructor(props){
    super();
    var board = new Board(props.width,props.height)
    this.state = {
      width: board.width,
      height: board.height,
      board: board.board
    }
  }

  render(){
    var board = this.state.board

    for (row in board){
      row = []
      for (status in row){
        row.push(
          <LifeBoardSquare status={status}/>
        )
      }
    }
    return( 
      <p> {this.state.board.board} </p>
    )
  }
}

export default LifeBoard;
