import React from "react";
import { CardsData } from "../Data.js";
import "./Card.css";
import Card from "./Card";

const Cards = () => {
    console.log(CardsData);
  return (
    <div className="Cards">
      {CardsData.map((card, id) => {
        return (
          <div className="parentContainer">
            <Card 
                title={card.title}
                color={card.color}
                body={card.body}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;