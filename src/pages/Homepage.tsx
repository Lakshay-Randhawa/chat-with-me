import { useState } from "react";
import HomepageImage from "../assets/homepage.webp";
import { LoginForm } from "../components/LoginForm";
import { Register } from "./Register";

export const Homepage = () => {
  const [isNewUser, setIsNewUser] = useState(false);

  const toggleLoginFormToRegister = () => {
    setIsNewUser(!isNewUser);
  };

  return (
    <div>
      <div className="flex p-16">
        <div className="self-auto basis-9/12">
          <img src={HomepageImage} alt="Homepage Image" />
        </div>
        <div className="basis-3/12">
          {isNewUser ? (
            <Register toggleForm={toggleLoginFormToRegister} />
          ) : (
            <LoginForm toggleForm={toggleLoginFormToRegister} />
          )}
        </div>
      </div>
    </div>
  );
};
