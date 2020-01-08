import React, { FC } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

import Todos from "./containers/Todos";
import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: red
  },
  typography: {
    useNextVariants: true
  }
});

const App: FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={Todos} />
        <Redirect to="/" />
      </Switch>
    </MuiThemeProvider>
  );
}

export default App