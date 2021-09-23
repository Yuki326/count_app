import React,{Component} from 'react';
import Counter from './Counter';
import ToggleButton from './ToggleButton';
import Time from './Time';
import './App.css';
import LikedButtonComponent from './LikedButton';

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>Count App</h1>
        <Counter />
        <ToggleButton title="favorite" />
        <ToggleButton title="good" />
        <ToggleButton title="bad" />
        <LikedButtonComponent />
        <Time />
      </div>
    )
  }
}

export default App;
