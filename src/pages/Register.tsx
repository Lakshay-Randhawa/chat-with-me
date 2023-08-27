import { useState } from "react";
import {
  TextField,
  Typography,
  OutlinedInput,
  InputLabel,
  FormControl,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { IconButton, InputAdornment } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { HowerButton as Button } from "../HOC/Button";

type Props = {
  toggleForm: () => void;
};

export const Register = (props: Props) => {
  const { toggleForm } = props;
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigate = useNavigate();

  //   const formik = useFormik({
  //     initialValues: {
  //       name: "",
  //       email: "",
  //       password: "",
  //       confirmPassword: "",
  //     },
  //     onSubmit: async (values) => {
  //       try {
  //         const userData = await axios({
  //           method: "post",
  //           url: "http://localhost:5001/api/users/register",
  //           data: {
  //             name: values.name,
  //             email: values.email,
  //             password: values.password,
  //           },
  //         });
  //         navigate("/chat");
  //       } catch (error) {}
  //     },
  //   });

  const handlePasswordShow = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <div className="border border-gray-400 rounded-lg mx-auto flex flex-col gap-8 p-12 w-96 h-auto">
        <div onClick={toggleForm}>
          <ArrowBackIosIcon />
        </div>
        <Typography variant="h4">Sign Up</Typography>
        {/* Name */}
        <TextField
          autoFocus
          id="name"
          name="name"
          label="Name"
          //   placeholder="Enter your name"
          //   value={formik.values.name}
          //   onChange={formik.handleChange}
          //   onReset={formik.handleReset}
          multiline
        />
        {/* Email */}
        <TextField
          id="email"
          name="email"
          label="Email"
          placeholder="Enter your email"
          //   value={formik.values.email}
          //   onChange={formik.handleChange}
          //   onReset={formik.handleReset}
          multiline
        />
        {/* Password */}
        <FormControl>
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="password"
            name="password"
            label="Password"
            type={passwordVisible ? "text" : "password"}
            placeholder="Enter password"
            // value={formik.values.password}
            // onChange={formik.handleChange}
            // onReset={formik.handleReset}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handlePasswordShow}
                  edge="end"
                >
                  {passwordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        {/* Confirm Password */}
        <FormControl>
          <InputLabel htmlFor="confirmPassword">Password</InputLabel>
          <OutlinedInput
            id="confirmPassword"
            name="confirmPassword"
            label="Password"
            type={passwordVisible ? "text" : "password"}
            placeholder="Enter password"
            // value={formik.values.confirmPassword}
            // onChange={formik.handleChange}
            // onReset={formik.handleReset}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handlePasswordShow}
                  edge="end"
                >
                  {passwordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <Button>
          <Typography>Register</Typography>
        </Button>
      </div>
    </>
  );
};
