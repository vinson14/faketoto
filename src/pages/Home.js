import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Simulation from "../components/Simulation";
import Input from "../components/Input";
import Intro from "../components/Intro";
import Layout from "../components/Layout";

const Home = () => {
    const [winningNumbers, setWinningNumbers] = useState([]);
    const [additionalNumber, setAdditionalNumber] = useState([]);
    const [groupOnePrize, setGroupOnePrize] = useState("");
    const [startSimulation, setStartSimulation] = useState(false);

    return (
        <Layout>
            <CSSTransition
                in={!startSimulation}
                mountOnEnter
                unmountOnExit
                timeout={{
                    appear: 2000,
                    enter: 2000,
                    exit: 0,
                }}
                classNames="simulation"
            >
                <Intro />
            </CSSTransition>

            <CSSTransition
                in={!startSimulation}
                mountOnEnter
                unmountOnExit
                timeout={{
                    appear: 2000,
                    enter: 2000,
                    exit: 0,
                }}
                classNames="simulation"
            >
                <Input
                    winningNumbers={winningNumbers}
                    additionalNumber={additionalNumber}
                    groupOnePrize={groupOnePrize}
                    setWinningNumbers={setWinningNumbers}
                    setAdditionalNumber={setAdditionalNumber}
                    startSimulation={startSimulation}
                    setStartSimulation={setStartSimulation}
                    setGroupOnePrize={setGroupOnePrize}
                />
            </CSSTransition>

            <CSSTransition
                in={startSimulation}
                mountOnEnter
                unmountOnExit
                timeout={{
                    appear: 2000,
                    enter: 2000,
                    exit: 0,
                }}
                classNames="simulation"
            >
                <Simulation
                    winningNumbers={winningNumbers}
                    additionalNumber={additionalNumber}
                    groupOnePrize={groupOnePrize}
                    setStartSimulation={setStartSimulation}
                />
            </CSSTransition>
        </Layout>
    );
};

export default Home;
