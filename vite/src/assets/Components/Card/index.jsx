import React from "react";
import MyButton from "../MyButton";
import "./index.css";

const Card = ({ title, description }) => {
  return (
    <div className="card">
      <h1>Card {title}</h1>
      <p>{description}</p>
      <div className="line">
        <MyButton name={"More info"} />
      </div>
    </div>
  );
};

export default Card;
