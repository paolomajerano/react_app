import React from "react";
import { Button, Grid } from "@material-ui/core";
import "./App.css";
import NavPage from "./navHeader/containers/navigationContainer";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";
import HomePage from "./home/pages/homePage";
import AboutPage from "./about/pages/aboutPage";

function App() {
  return (
    <Router>
      <NavPage />
      <Switch>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
