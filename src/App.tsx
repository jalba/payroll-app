import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from "react-router-dom";

import { Theme } from "styling";
import { AppContainer } from "containers/app-container";

function App() {
  return (
    <Theme>
      <CssBaseline />
      <BrowserRouter>
        <AppContainer />
      </BrowserRouter>
    </Theme>
  );
}

export default App;
