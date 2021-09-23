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
    let className = this.state.count>2 ? (this.state.count>5 ? "counter-2" : "counter-1"):"counter-0";
    const clicked =()=>{
      this.increment();
    }  
    return (
      <div>
        <h1 className={className}>{this.state.count}</h1>
        <button className="counterButton"onClick={()=>clicked()}>+</button>
        <button className="counterButton"onClick={this.decrement}>-</button>
      </div>
    )
  }
}

export default Counter