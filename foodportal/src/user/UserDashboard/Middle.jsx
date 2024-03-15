import * as React from "react";
import { Box } from "@mui/material";
import RecipeCard from "./Card";

export default function Middle() {
  return (
    <div>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          justifyContent: "space-evenly",
          justifyItems: "center",
          alignContent: "space-evenly",
          alignItems: "center",
          height: "100%",
        }}
      >
        <RecipeCard heading="Breakfast" />
        <RecipeCard heading="Lunch" />
        <RecipeCard heading="Snacks" />
        <RecipeCard heading="Dinner" />
      </Box>
    </div>
  );
}
