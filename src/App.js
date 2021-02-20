import React, { useEffect } from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    useLocation,
} from "react-router-dom";
import styles from "./App.css";
import Home from "./pages/Home";
import Simulation from "./pages/Simulation";

const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/simulation">
                    <Simulation />
                </Route>
            </Switch>
        </Router>
    );
};

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default App;
