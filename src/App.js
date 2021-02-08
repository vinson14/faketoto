import React, { useEffect } from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    useLocation,
} from "react-router-dom";
import About from "./pages/About";
import styles from "./App.css";
import NewHome from "./pages/NewHome";
import Simulation from "./pages/Simulation";

const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <Switch>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/new">
                    <NewHome />
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
