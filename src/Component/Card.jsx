import React from "react";
import style from "./card.module.css"
 
 
const Card = (props) => {
  return (
    <div className={style.card} style={{background: props.cor}} >
      <p>{props.nome}</p>
      <h1>{props.cor}</h1>
    </div>
  );
};
 
export default Card;