import { TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { HowerButton as Button } from "../HOC/Button";

// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

type Props = {
  toggleForm: () => void;
};

export const LoginForm = (props: Props) => {
  const navigate = useNavigate();
  const { toggleForm } = props;

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
      <Button>
        <Typography>Login</Typography>
      </Button>
      <Typography>
        Don't have an account ?{" "}
        <Typography className="hover:text-blue-600 hover:underline">
          <a onClick={toggleForm}>Sign Up</a>
        </Typography>
      </Typography>
      {/* </form> */}
    </div>
  );
};
