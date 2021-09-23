import React from 'react';
import './toggleButton.css';
function ToggleButton(props){
  const[liked,setLiked] = React.useState(false);
  const className = liked ? 'on':'off'
  return(
    <button className={className} onClick={()=>setLiked(!liked)}>{props.title}</button>
  )
}

export default ToggleButton