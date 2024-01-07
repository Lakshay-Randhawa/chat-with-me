import { TextField, Typography } from "@mui/material";
import { HowerButton as Button } from "../HOC/Button";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import axios from "axios";
import { useUserStore } from "../store/userStore";
import { ToastContainer, toast } from "react-toastify";

type Props = {
  toggleForm: () => void;
};

export const LoginForm = (props: Props) => {
  const { toggleForm } = props;
  const { setCurrentUser } = useUserStore();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      // Create a new util function to create an axios instance

      const res = await axios.post("http://localhost:5000/auth/signin", data);

      if (res.data) {
        const { access_token } = res.data;

        const user = { email: data.email, token: access_token };

        setTimeout(() => {
          setCurrentUser(user);
        }, 2500);
        toast.success("Login Successful");
      }
    } catch (e: any) {
      toast.error("Invalid Credentials");
      console.log(e.response.data.message);
      reset();
    }
  };
  return (
    <>
      <ToastContainer autoClose={2500} />
      <form
        className=" border-gray-600 rounded-lg flex flex-col gap-8 p-12 w-96 h-fit shadow-2xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Typography variant="h4">Sign In</Typography>
        <TextField
          {...register("email", { required: true })}
          autoFocus
          margin="dense"
          id="email"
          name="email"
          label="Email Address"
          type="email"
          variant="standard"
          fullWidth
        />
        <TextField
          {...register("password", { required: true })}
          margin="dense"
          id="password"
          name="password"
          label="Password"
          type="password"
          variant="standard"
          fullWidth
        />
        <Button>
          <Typography>Login</Typography>
        </Button>
        <div className="flex gap-2">
          <Typography>Don't have an account? </Typography>
          <Typography className="hover:underline cursor-pointer">
            <a className="text-blue-600" onClick={toggleForm}>
              Sign Up
            </a>
          </Typography>
        </div>
      </form>
    </>
  );
};
