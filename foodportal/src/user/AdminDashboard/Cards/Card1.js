import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
export default function RecipeReviewCard({ heading,body }) {
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
            startIcon={<EditIcon />}
            sx={{
              background: "#3A6E49",
              color: "white",
            }}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            endIcon={<CheckCircleIcon />}
            sx={{
              background: "#A2D9A1",
              color: "white",
            }}
          >
            Save
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
}