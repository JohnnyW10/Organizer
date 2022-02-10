import React from "react";

function Element(props){
  return(
    <div className="elements">
      <div><h3>Name: {props.name}</h3></div><div className={props.level}>Importance level: {props.level}</div>
      <div><p className='describe'>Description: {props.describe}</p></div><div><p className='time'>Time: {props.time}</p></div>
    </div>
  );
}

export default Element;
