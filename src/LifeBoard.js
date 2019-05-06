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
    this.advance = this.advance.bind(this);
  }

  style(){
    return {
      width: `${this.state.boardState.width*20}px`,
      height: `${this.state.boardState.height*20}px`,
    }
  }

  advance(){
    this.setState( {
      boardState: this.state.boardState.advance()
    })
  }

  toggleSquare(i,j){
    this.setState( prevState => {
      var newState = prevState.boardState
      console.log(newState)
      console.log(newState.board)
      newState.board[i][j] = 1 - prevState.boardState.board[i][j]
      return {boardState: newState}
    })
  }

  mapRows(f){
    return [...Array(this.state.boardState.height).keys()].map(f)
  }

  mapCols(f){
    return [...Array(this.state.boardState.width).keys()].map(f)
  }

  render(){
    return(
      <div id="life-board">
      {
        this.mapRows( (_,i) => {
          return(<div className="boardRow" key={i}>{
            this.mapCols( (_,j) => {
              return(<LifeBoardSquare key={j} toggle={() => this.toggleSquare(i,j)}/>)
            })
          }</div>)
        })
      }
      <button onClick={this.advance}> Click me! </button>
      </div>
    )
  }
}

export default LifeBoard;
