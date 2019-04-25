import React, {Component} from 'react';
import Board from './Board.js';
import LifeBoardSquare from './LifeBoardSquare.js';
import './LifeBoard.css'

class LifeBoard extends Component{
  constructor(props){
    super();
    var board = new Board(props.width,props.height)
    this.state = {
      boardState: board
    }
  }

  style(){
//  var width = 80.0/(this.state.boardState.width);
//  var height = 80.0/(this.state.boardState.height);
    return {
      width: `${this.state.boardState.width*20}px`,
      height: `${this.state.boardState.height*20}px`,
//    width: `${width}%`,
//    height: `${height}%`
    }
  }

  advance(){
    this.setState( prevState => {
      boardState: prevState.boardState.advance()
    })
  }

  render(){
    console.log(this.style())
    return(
      <div className="board" style={this.style()}>
        {this.state.boardState.board.map(renderRow)}
      </div>
    )
  }
}


function renderRow(row,i){
  return(<div className="boardRow" key={i}> 
    {row.map(renderSquare)}
  </div>)
}

function renderSquare(status,j){
  return(<LifeBoardSquare statusCode={status} key={j}/>)
}

export default LifeBoard;
