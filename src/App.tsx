import { StyledEngineProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { useUserStore } from "./store/userStore";
import { Chat } from "./pages/Chat";
import { Homepage } from "./pages/Homepage";

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

{
  /* <Routes>
  <Route path="/" element={<Homepage />} />
  <Route path="/chat" element={<Chat />} />
</Routes> */
}
