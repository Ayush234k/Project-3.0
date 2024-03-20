import * as React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";
import UndoIcon from "@mui/icons-material/Undo";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import Stack from "@mui/material/Stack";

import { CardsData } from "../Data";
import "./Card.css";
import { motion } from "framer-motion";

export default function RecipeCard({ heading, body }) {
  return (
    <Card sx={{ maxWidth: 320, background: "#397E62", color: "white" }}>
      <CardHeader title={heading} />
      <CardContent>
        <Typography variant="body2">
          {body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            startIcon={<TaskAltIcon />}
            sx={{
              background: "#3A6E49",
              color: "white",
            }}
          >
            Skip
          </Button>
          <Button
            variant="contained"
            endIcon={<UndoIcon />}
            sx={{
              background: "#A2D9A1",
              color: "white",
            }}
          >
            Undo
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
}
