import React from "react";
import Button from "./Button";

const StartSimulation = (props) => {
    const {
        startSimulation,
        setStartSimulation,
        winningNumbers,
        additionalNumber,
        groupOnePrize,
    } = props;

    const handleStartSimulation = () => {
        if (winningNumbers.length !== 6) {
            alert("Please select 6 Winning Numbers");
        } else if (additionalNumber.length !== 1) {
            alert("Please select 1 Additional Number");
        } else if (!groupOnePrize) {
            alert("Please enter the Group 1 jackpot for today");
        } else {
            setStartSimulation(true);
        }
    };

    return <Button onClick={handleStartSimulation}>Start Simulation</Button>;
};

export default StartSimulation;
