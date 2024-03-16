import Rightpanel from "../Calendar/Rightpanel";
import Mid from "../Middle/Mid";
import Leftpanel from "../Dash/Leftpanel";
import { Box } from "@mui/material";
import "./View.css";
const View = () => {
  return (
    <Box
      sx={{
        height: "100%",
        display: "grid",
        gridTemplateColumns: "15% 62% 23%",
        gap: "0px",
      }}
    >
        <Rightpanel/>
        <Mid/>
        <Leftpanel/>
    </Box>
  );
};
export default View;
