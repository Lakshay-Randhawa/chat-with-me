import HomepageImage from "../assets/homepage.webp";
import { LoginForm } from "../components/LoginForm";

export const Homepage = () => {
  return (
    <div>
      <div className="flex p-16">
        <div className="self-auto basis-9/12">
          <img src={HomepageImage} alt="Homepage Image" />
        </div>
        <div className="basis-3/12">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};
