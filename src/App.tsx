import { StyledEngineProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Navbar } from "./components/Navbar";
import { Register } from "./pages/Register";

export const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </StyledEngineProvider>
  );
};

export default App;
