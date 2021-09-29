import React,{Component} from 'react';
import Counter from './Counter' ;
import './App.css';
import ToggleButton from './ToggleButton'

class App extends Component{
  render(){
    return(
      <div className="App">
        <ToggleButton title="test"/>
        <div className="footer">
          <Counter />
        </div>
      </div>
    )
  }
}

export default App;
