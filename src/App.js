import React,{Component} from 'react';
import Counter from './Counter' ;
import './App.css';


class App extends Component{
  render(){
    return(
      <div className="App">
        
        <div className="footer">
          <Counter />
        </div>
      </div>
    )
  }
}

export default App;
