import { AppBar, Toolbar, Typography } from "@mui/material";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar className="flex">
        <Link className="flex gap-3" to="/">
          <Typography variant="h5">Let's Chat</Typography>
          <QuestionAnswerIcon fontSize="large" />
        </Link>
      </Toolbar>
    </AppBar>
  );
};
