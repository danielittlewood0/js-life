import React, {Component} from 'react';
import Board from './Board.js';
import LifeBoardSquare from './LifeBoardSquare.js';
import './LifeBoard.css'

class LifeBoard extends Component{
  constructor(props){
    super();
    var board = new Board(props.width,props.height)
    this.state = {
      boardState: board,
      playInterval: null
    }
    this.advance = this.advance.bind(this);
    this.startPlaying = this.startPlaying.bind(this);
    this.stopPlaying = this.stopPlaying.bind(this);
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

  startPlaying(){
    this.setState( {
      playInterval: setInterval(this.advance,1000)
    })
  }

  stopPlaying(){
    clearInterval(this.state.playInterval);
  }

  render(){
    return(
      <div id="life-board">
      {
        this.mapRows( (_,i) => {
          return(<div className="boardRow" key={i}>{
            this.mapCols( (_,j) => {
              var state = this.state.boardState.board[i][j];
              return(<LifeBoardSquare key={j} statusCode={state} toggle={() => this.toggleSquare(i,j)}/>)
            })
          }</div>)
        })
      }
      <button onClick={this.startPlaying}> Start! </button>
      <button onClick={this.stopPlaying}> Stop! </button>
      </div>
    )
  }
}

export default LifeBoard;
