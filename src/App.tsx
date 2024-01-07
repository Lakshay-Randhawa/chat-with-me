import { StyledEngineProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { useUserStore } from "./store/userStore";
import { Chat } from "./components/chat/Chat";
import { Homepage } from "./components/Homepage";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  const user = useUserStore((state) => state.currentUser);
  return (
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <div className="flex flex-col h-screen">
          <div className="basis-1/12">
            <Navbar />
          </div>
          <div className="basis-11/12">{user ? <Chat /> : <Homepage />}</div>
        </div>
      </BrowserRouter>
    </StyledEngineProvider>
  );
};

export default App;
