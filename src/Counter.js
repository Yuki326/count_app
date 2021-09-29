import React,{Component} from 'react';
import reactDom from 'react-dom';
import BackGround from './BackGround';
import './counter.css'

class Counter extends Component{
  constructor(props){
    super(props)
    this.state = {
      count: 1000 //todo 
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
    
  };

  decrement = () => {
    this.setState(
      {
        count: this.state.count - 1
      });
  };

  render(){
    return (
      <div>
        <button className="counterButton"onClick={this.increment}>Next</button>
        <button className="counterButton"onClick={this.decrement}>Back</button>
        <BackGround count={this.state.count%3/*todo 画像の枚数*/}/>
      </div>
    )
  }
}

export default Counter