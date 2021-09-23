import React,{Component} from 'react';
import Counter from './Counter';
import ToggleButton from './ToggleButton';
import LikedButton from './LikedButton';
import './App.css';

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>Count App</h1>
        <Counter />
        <ToggleButton title="favorite" />
        <ToggleButton title="good" />
        <ToggleButton title="bad" />
        <LikedButton />
      </div>
    )
  }
}

export default App;
