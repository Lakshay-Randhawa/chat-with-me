import { TextField, Typography } from "@mui/material";
import { HowerButton as Button } from "../HOC/Button";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import axios from "axios";
import { useUserStore } from "../store/userStore";

// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

type Props = {
  toggleForm: () => void;
};

export const LoginForm = (props: Props) => {
  const { toggleForm } = props;
  const { setCurrentUser } = useUserStore();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await axios.post("http://localhost:5000/auth/signin", data);
      if (res.data) {
        const { access_token } = res.data;

        const user = { email: data.email, token: access_token };

        setCurrentUser(user);
      }
    } catch (e: any) {
      console.log(e.response.data.message);
    }
  };
  return (
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
        //   value={formik.values.password}
        //   onChange={formik.handleChange}
        //   onReset={formik.handleReset}
        fullWidth
      />
      <Button>
        <Typography>Login</Typography>
      </Button>
      <div className="flex gap-2">
        <Typography>Don't have an account? </Typography>
        <Typography className="hover:text-blue-600 hover:underline cursor-pointer">
          <a onClick={toggleForm}>Sign Up</a>
        </Typography>
      </div>
    </form>
  );
};
