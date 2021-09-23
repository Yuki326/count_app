import React from 'react';
import './toggleButton.css';
//クリックすると見た目が切り替わる機能。与えられたtitleをボタンに表示する。
function ToggleButton(props){
  const [clicked,SetClicked]=React.useState(false);
  const className = clicked ? 'on':'off';
  return(
    <button className ={className} onClick={()=>{SetClicked(!clicked)}}>{props.title}</button>
  )
}


export default ToggleButton