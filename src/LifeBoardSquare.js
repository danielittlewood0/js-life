import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class LifeBoardSquare extends Component{
  constructor(props){
    super();
    this.state = {
      statusCode: props.statusCode
    }
  }

  status(){
    if (this.state.statusCode == 0){ return "dead" }
    else if (this.state.statusCode == 1){ return "alive" }
    else { return null }
  }

  render(){
    var board = this.state.board

    return( 
      <div className="lifeSquare"> 1 </div>
    )
  }
}

export default LifeBoardSquare;
