import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { About } from "./About";
import "./App.css";

const App = () => (
    <BrowserRouter>
        <React.Fragment>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
            </Switch>
        </React.Fragment>
    </BrowserRouter>
);

export default App;

