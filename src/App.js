import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import AppProvider from "./AppProvider";

import MainLayout from "./layouts/MainLayout";
import Home from "./views/Home";
import Terminals from "./views/Terminals";
import Buyers from "./views/Buyers";
import Buyer from "./views/Buyer";

import "./assets/styles/main.scss";
import NoMatch from "./views/NoMatch";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/terminals">
              <MainLayout>
                <Terminals />
              </MainLayout>
            </Route>

            <Route path="/buyers/:id">
              <MainLayout>
                <Buyer />
              </MainLayout>
            </Route>

            <Route path="/buyers">
              <MainLayout>
                <Buyers />
              </MainLayout>
            </Route>

            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      </div>
    </AppProvider>
  );
}

export default App;
