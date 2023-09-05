import { AppBar, Toolbar, Typography } from "@mui/material";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <AppBar className="top-0" position="fixed">
      <Toolbar className="flex">
        <div className="flex gap-3">
          <Typography variant="h5">Let's Chat</Typography>
          <Link to="/">
            <QuestionAnswerIcon fontSize="large" />
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};
