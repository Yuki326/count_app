import React,{Component} from 'react';
import Counter from './Counter' ;
import './App.css';
import ToggleButton from './ToggleButton'

class App extends Component{
  render(){
    return(
      <div className="App">
        <div className= "header">
          <ToggleButton title="test"/>
          <a className="gitLink" href="https://github.com/Yuki326">github</a>
          <a className="react 練習用ページ" href="https://brave-forest-027d0d210.azurestaticapps.net/">react 練習用ページ</a>
        </div>
        <div className="testArea">
          <div className="box1"></div>
          <div className="box2"></div>
        </div>
        <div className="footer">
          <Counter />
        </div>
      </div>
    )
  }
}

export default App;
