import { StyledEngineProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage";

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
