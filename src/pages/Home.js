import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Intro from "../components/Intro";
import Layout from "../components/Layout";
import SelectNumbers from "../components/SelectNumbers";
import SetJackpot from "../components/SetJackpot";

const Home = () => {
    //States to control rendering of components
    const [showIntro, setShowIntro] = useState(true);
    const [showSelectNumbers, setShowSelectNumbers] = useState(false);
    const [showSetJackpot, setShowSetJackpot] = useState(false);
    const [showSimulation, setShowSimulation] = useState(false);

    const [winningNumbers, setWinningNumbers] = useState([]);
    const [additionalNumber, setAdditionalNumber] = useState([]);
    const [jackpot, setJackpot] = useState("");

    const timeout = 1000;

    return (
        <Layout>
            <CSSTransition
                in={showIntro}
                appear={true}
                timeout={{
                    appear: 1000,
                    enter: 1000,
                    exit: 0,
                }}
                mountOnEnter
                unmountOnExit
                classNames="transition"
            >
                <Intro setShowSelectWinning={setShowSelectNumbers} />
            </CSSTransition>
            <CSSTransition
                in={showSelectNumbers}
                timeout={{
                    appear: timeout,
                    enter: timeout,
                    exit: 0,
                }}
                mountOnEnter
                unmountOnExit
                classNames="transition"
                onEnter={() => setShowIntro(false)}
            >
                <SelectNumbers
                    title="Winning Numbers"
                    winningNumbers={winningNumbers}
                    setWinningNumbers={setWinningNumbers}
                    additionalNumber={additionalNumber}
                    setAdditionalNumber={setAdditionalNumber}
                    maxSelection={6}
                    showNext={setShowSetJackpot}
                    showBack={setShowIntro}
                    showThis={setShowSelectNumbers}
                />
            </CSSTransition>
            <CSSTransition
                in={showSetJackpot}
                timeout={{
                    appear: timeout,
                    enter: timeout,
                    exit: 0,
                }}
                mountOnEnter
                unmountOnExit
                classNames="transition"
            >
                <SetJackpot
                    jackpot={jackpot}
                    setJackpot={setJackpot}
                    showThis={setShowSetJackpot}
                    showBack={setShowSelectNumbers}
                    showNext={setShowSimulation}
                />
            </CSSTransition>
            <CSSTransition
                in={showSimulation}
                timeout={{
                    appear: timeout,
                    enter: timeout,
                    exit: 0,
                }}
                mountOnEnter
                unmountOnExit
                classNames="transition"
            >
                <Redirect
                    push
                    to={{
                        pathname: "/simulation",
                        search: createQueryString(
                            winningNumbers,
                            additionalNumber,
                            jackpot
                        ),
                    }}
                />
            </CSSTransition>
        </Layout>
    );
};

const createQueryString = (numbers, addNum, jackpot) => {
    var query = "?";

    // Iterate through winning numbers
    numbers.forEach((number, index) => {
        query = query.concat(`num${index}=${number}&`);
    });

    // Concat the additional number and jackpot
    query = query.concat(`addNum=${addNum}&jackpot=${jackpot}`);

    // Return queryString
    return query;
};

export default Home;
