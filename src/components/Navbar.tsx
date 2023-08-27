import { AppBar, Toolbar, Typography } from "@mui/material";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

export const Navbar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar className="flex">
          <div className="flex gap-3">
            <Typography variant="h5">Let's Chat</Typography>
            <div>
              <QuestionAnswerIcon fontSize="large" />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
