import React from "react";
import { Container } from "@material-ui/core";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home.jsx/Home";
import Auth from "./components/Auth/Auth";
import Footer from "./components/Footer/Footer";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Container maxwidth="lg" style={{ padding: 0 }}>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
        </Switch>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;
