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

export default function RecipeReviewCard({meal}) {
  return (
    <Card sx={{ maxWidth: 345, background: "#397E62" }}>
      <CardHeader sx={{ color: "white" }} title={meal} />
      <CardContent>
        <Typography variant="body2" color="white">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Stack direction="row" spacing={2}>
          <Button
            sx={{ color: "white", borderColor: "white" }}
            variant="outlined"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
          <Button
            sx={{ background: "#397E62", color: "white", borderColor: "white" }}
            variant="contained"
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
}
