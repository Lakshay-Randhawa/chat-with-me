import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { StyledEngineProvider } from "@mui/material/styles";

export const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </StyledEngineProvider>
  );
};

export default App;
