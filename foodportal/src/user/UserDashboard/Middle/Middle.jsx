import * as React from "react";
import { Box } from "@mui/material";
import RecipeCard from "../Card/Card";
import { CardsData } from "../Data";
import "./Middle.css";

export default function Middle() {
  return (
    <Box className="Cards">
      {CardsData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <RecipeCard heading={card.title} body={card.body} />
          </div>
        );
      })}
    </Box>
  );
}