import React, {Component} from 'react';
import './LifeBoard.css'

class LifeBoardSquare extends Component{
  constructor(props){
    super();
    this.state = {
      statusCode: props.statusCode
    }
    this.toggle = this.toggle.bind(this);
  }

  status(){
    if (this.state.statusCode == 0){ return "deadSquare" }
    else if (this.state.statusCode == 1){ return "aliveSquare" }
    else { return null }
  }

  toggle(){
    let newCode = 1-this.state.statusCode
    console.log(newCode)
    this.setState({statusCode: newCode});
  }

  render(){
    return( 
      <div className={this.status()} onClick={this.toggle}> </div>
    )
  }
}

export default LifeBoardSquare;
