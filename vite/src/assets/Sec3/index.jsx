import React from "react";
import "./index.css";
import Card from "../Components/Card";

const Section3 = () => {
  return (
    <>
      <div className="container">
        <div className="cards">
          <Card
            title={"One"}
            description={
              `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Rem magni quas ex numquam, maxime minus quam molestias 
               corporis quod, ea minima accusamus.`
            }
          />
          <Card
            title={"Two"}
            description={
              `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Rem magni quas ex numquam, maxime minus quam molestias 
               corporis quod, ea minima accusamus.`
            }
          />
          <Card
            title={"Three"}
            description={
              `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Rem magni quas ex numquam, maxime minus quam molestias 
               corporis quod, ea minima accusamus.`
            }
          />
        </div>
      </div>
    </>
  );
};

export default Section3;
