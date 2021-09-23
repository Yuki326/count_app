import React,{Component} from 'react';
import './counter.css'
class Counter extends Component{
  constructor(props){
    super(props)
    this.state = {
      count: 0
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
        count:this.state.count>0 ? this.state.count - 1:0
      });
  };

  render(){
    return (
      <div>
        <h1 className="counter">{this.state.count}</h1>
        <button className="counterButton"onClick={this.increment}>+</button>
        <button className="counterButton"onClick={this.decrement}>-</button>
      </div>
    )
  }
}

export default Counter