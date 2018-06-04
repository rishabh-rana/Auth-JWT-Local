import React, { Component } from "react";
import Header from "./components/header";
import Landing from "./components/landing";
import Signup from "./components/signup";
import Signin from "./components/signin";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Landing} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route path="/protected" component={() => <div>PROTECTED</div>} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
