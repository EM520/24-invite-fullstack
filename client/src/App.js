import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import GoingPage from "./features/invite/GoingPage";
import NotGoingPage from "./features/invite/NotGoingPage";
import InvitePage from "./features/invite/InvitePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <InvitePage />
        </Route>
        <Route path="/going">
          <GoingPage />
        </Route>
        <Route path="/not-going">
          <NotGoingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
