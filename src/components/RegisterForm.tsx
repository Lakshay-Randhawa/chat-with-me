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

import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

import { IconButton, InputAdornment } from "@mui/material";
import { HowerButton as Button } from "../HOC/Button";
import axios from "axios";

type Props = {
  toggleForm: () => void;
};

export const RegisterForm = (props: Props) => {
  const { toggleForm } = props;
  const { register, watch, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordConfirmed, setIsPasswordConfirmed] = useState(false);

  const password = watch("password");

  const handlePasswordShow = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleConfirmPasswordChange = (e: any) => {
    const isConfirmed = e.target.value === password;

    setIsPasswordConfirmed(() => (isConfirmed ? true : false));
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const res = await axios.post("http://localhost:5000/auth/signup", data);
    console.log(res);
  };

  return (
    <form
      className="border-gray-600 rounded-lg mx-auto flex flex-col gap-8 p-12 w-96 h-fit shadow-2xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex gap-2 items-center">
        <div onClick={toggleForm}>
          <ArrowBackIosIcon />
        </div>
        <Typography variant="h4">Sign Up</Typography>
      </div>

      <TextField
        autoFocus
        label="Name"
        placeholder="Enter your name"
        multiline
        {...register("name", { required: true })}
      />

      <TextField
        label="Email"
        placeholder="Enter your email"
        multiline
        {...register("email", { required: true })}
      />

      <FormControl>
        <InputLabel htmlFor="password">Password</InputLabel>
        <OutlinedInput
          id="password"
          {...register("password", { required: true })}
          label="Password"
          type={isPasswordVisible ? "text" : "password"}
          placeholder="Enter password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handlePasswordShow}
                edge="end"
              >
                {isPasswordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
        <OutlinedInput
          color={isPasswordConfirmed ? "success" : "warning"}
          id="confirmPassword"
          {...register("confirmPassword", { required: true })}
          label="Confirm Password"
          type={isPasswordVisible ? "text" : "password"}
          placeholder="Confirm password"
          onChange={handleConfirmPasswordChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handlePasswordShow}
                edge="end"
              >
                {isPasswordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      <Button>
        <Typography>Register</Typography>
      </Button>
    </form>
  );
};
