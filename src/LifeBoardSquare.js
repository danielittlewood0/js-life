import React, {Component} from 'react';
import './LifeBoard.css'

class LifeBoardSquare extends Component{
  constructor(props){
    super();
  }

  status(){
    if (this.props.statusCode == 0){ return "deadSquare" }
    else if (this.props.statusCode == 1){ return "aliveSquare" }
    else { return null }
  }


  render(){
    return( 
      <div className={this.status()} onClick={this.props.toggle}> </div>
    )
  }
}

export default LifeBoardSquare;
