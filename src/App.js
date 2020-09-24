import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import SignIn from "./components/SignIn";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/search" component={Search} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;