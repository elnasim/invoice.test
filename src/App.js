import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppProvider from "./AppProvider";
import Home from "./views/Home";
import Terminals from "./views/Terminals";
import Buyers from "./views/Buyers";

import "./assets/styles/main.scss";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/terminals">terminals</Link>
                </li>
                <li>
                  <Link to="/buyers">buyers</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/terminals">
                <Terminals />
              </Route>

              <Route path="/buyers">
                <Buyers />
              </Route>

              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </AppProvider>
  );
}

export default App;
