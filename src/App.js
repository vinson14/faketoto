import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./pages/About";
import styles from "./App.css";
import Results from "./pages/Results";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/results">
                    <Results />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
