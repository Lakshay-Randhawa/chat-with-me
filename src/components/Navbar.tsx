import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { Link } from "react-router-dom";
import { Logout } from "@mui/icons-material";
import { useUserStore } from "../store/userStore";

export const Navbar = () => {
  const { currentUser, setCurrentUser } = useUserStore();

  const handleLogout = () => {
    setCurrentUser(null);
  };
  return (
    <AppBar position="static">
      <Toolbar className="flex justify-between">
        <Link className="flex gap-3" to="/">
          <Typography variant="h5">Let's Chat</Typography>
          <QuestionAnswerIcon fontSize="large" />
        </Link>
        {currentUser && (
          <Button
            className="hover:bg-blue-500"
            color="inherit"
            variant="outlined"
            onClick={handleLogout}
            endIcon={<Logout />}
          >
            Log Out
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};
