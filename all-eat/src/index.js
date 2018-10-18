//this is the core file that will display the app
//it connects to App.js via the ID named 'root'
import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500
  },
  palette: {
    primary: {
      light: "#00bfa5",
      main: "#00bfa5",
      dark: "#0097a7",
      contrastText: "#fff"
    },
    secondary: {
      light: "#1de9b6",
      main: "#1de9b6",
      dark: "#0097a7",
      contrastText: "#000"
    }
  },
  button: {
    height: 35,
    iconButtonSize: 80,
    minWidth: 8
  }
});

render(
  <MuiThemeProvider theme={theme}>
    <Typography>
      <App />
    </Typography>
  </MuiThemeProvider>,
  document.getElementById("root")
);
