import { Homepage } from "./pages/Homepage";
import { StyledEngineProvider } from "@mui/material/styles";

export const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <div>
        <Homepage />
      </div>
    </StyledEngineProvider>
  );
};

export default App;
