import React from "react";
function Card(props){
    return(
        <div className="card">
          <div className="top">
           <h1 className="emoji">{props.emoji}</h1>
           <h2 className="description">{props.descrption}</h2>
          </div>
          <div className="bottom">
           <p>{props.content}</p>
          </div>
        </div>
    )
}
export default Card;