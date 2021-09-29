import React from 'react';
import './toggleButton.css';
//クリックすると見た目が切り替わる機能。与えられたtitleをボタンに表示する。
function ToggleButton(props){
  const [clicked,SetClicked]=React.useState(false);
  const className = clicked ? 'on':'off';
  const box = clicked ? 'red':'blue';
  return(
    <>
    <button className ={className} onClick={()=>{SetClicked(!clicked)}}>{props.title}</button>
    <div className={box}>
    </div>
    </>
  )
}


export default ToggleButton