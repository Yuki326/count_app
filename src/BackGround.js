import React,{Component} from 'react'
import './backGround.css'

class BackGround extends Component{
  data =[
    `scene1.jfif`,
    `scene2.jfif`,
    `scene3.jfif`,
  ]
  constructor(props){
    super(props)
    this.state ={
      list: this.data
    }
  }
  render(){
    return(
      <>
        <img alt="これは画像1です" className="picture" src= {this.data[this.props.count]}/>
      </>
    )
  }
}

export default BackGround 