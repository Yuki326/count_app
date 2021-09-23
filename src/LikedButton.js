import React from 'react';
import './likedbutton.css'
function LikedButton(props){
  const [liked,SetLiked]=React.useState(false);
  const className = liked ? 'liked':'like';
  const clicked = () =>{
    const currentLiked = !liked;
    const change = currentLiked ? 1 : -1;
    props.onClick((likedCount) => likedCount+change);
    SetLiked(currentLiked);
  };
  return(
    <button className ={className} onClick={()=>clicked()}>like</button>
  )
}

function LikedSummaryText(props){
  return(
    <p>Liked Count :{props.likedCount}</p>
  )
}

function LikedButtonComponent(){
  const[likedCount,SetLikedCount]=React.useState(999);
  return(
    <>
      <LikedButton onClick={SetLikedCount}/>
      <LikedSummaryText likedCount={likedCount}/>
    </>
  )
}

export default LikedButtonComponent