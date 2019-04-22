import React, {Component} from 'react';
import './LifeBoard.css'

class LifeBoardSquare extends Component{
  constructor(props){
    super();
    this.state = {
      statusCode: props.statusCode
    }
  }

  status(){
    if (this.state.statusCode == 0){ return "deadSquare" }
    else if (this.state.statusCode == 1){ return "aliveSquare" }
    else { return null }
  }

  render(){
    return( 
      <div className={this.status()}> </div>
    )
  }
}

export default LifeBoardSquare;
