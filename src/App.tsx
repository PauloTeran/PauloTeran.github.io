import React from "react";
import Main from "./Main";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Theme } from "./Assets/Theme";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={Theme}>
        <Main />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
