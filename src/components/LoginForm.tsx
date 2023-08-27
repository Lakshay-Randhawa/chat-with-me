import { Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

export const LoginForm = () => {
  const navigate = useNavigate();

  return (
    <div className=" border-gray-600 rounded-lg flex flex-col gap-8 p-12 w-96 h-fit shadow-2xl ">
      {/* <form onSubmit={formik.handleSubmit} style={formStyle}> */}
      <Typography variant="h4">Sign In</Typography>
      <TextField
        autoFocus
        margin="dense"
        id="email"
        name="email"
        label="Email Address"
        type="email"
        variant="standard"
        //   value={formik.values.email}
        //   onChange={formik.handleChange}
        //   onReset={formik.handleReset}
        fullWidth
      />
      <TextField
        margin="dense"
        id="password"
        name="password"
        label="Password"
        type="password"
        variant="standard"
        //   value={formik.values.password}
        //   onChange={formik.handleChange}
        //   onReset={formik.handleReset}
        fullWidth
      />
      <Button
        className="text-black hover:text-white"
        type="submit"
        variant="contained"
        size="small"
      >
        <Typography>Login</Typography>
      </Button>
      <Typography>
        Don't have an account ?{" "}
        <Link className="hover:text-blue-600 hover:underline" to={"/register"}>
          Sign Up
        </Link>
      </Typography>
      {/* </form> */}
    </div>
  );
};
