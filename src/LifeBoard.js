import React, {Component} from 'react';
import Board from './Board.js';
import LifeBoardSquare from './LifeBoardSquare.js';

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
    return(
      <div className="board">
        {this.state.board.map(renderRow)}
      </div>
    )
  }
}


function renderRow(row,i){
  return(<div className="row" key={i}> 
    {row.map(renderSquare)}
  </div>)
}

function renderSquare(status,j){
  return(<LifeBoardSquare statusCode={status} key={j}/>)
}

export default LifeBoard;
