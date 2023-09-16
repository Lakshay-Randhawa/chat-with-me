import { StyledEngineProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Navbar } from "./components/Navbar";
import { Chat } from "./pages/Chat";

export const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <div className="flex flex-col h-screen">
          <div className="basis-1/12">
            <Navbar />
          </div>
          <div className="basis-11/12">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/chat" element={<Chat />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </StyledEngineProvider>
  );
};

export default App;
