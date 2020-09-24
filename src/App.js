import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Search from "./Components/Search/Search";
import SignIn from "./Components/SignIn/SignIn";

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