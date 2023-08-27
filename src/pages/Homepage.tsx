import { Navbar } from "../components/Navbar";
import HomepageImage from "../assets/homepage.webp";

export const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex p-16">
        <div className="self-auto basis-9/12">
          <img src={HomepageImage} alt="Homepage Image" />
        </div>
        <div className="basis-3/12">Login Form</div>
      </div>
    </div>
  );
};
