import React from "react";
import SelectNumbers from "./SelectNumbers";
import StartSimulation from "./StartSimulation";
import SetGroupOnePrize from "./SetGroupOnePrize";

const Input = (props) => {
    const {
        winningNumbers,
        additionalNumber,
        groupOnePrize,
        setGroupOnePrize,
        setWinningNumbers,
        setAdditionalNumber,
        startSimulation,
        setStartSimulation,
    } = props;

    return (
        <div className="col-10 col-md-5 col-lg-4 d-flex flex-column justify-content-center align-items-center">
            <SetGroupOnePrize
                groupOnePrize={groupOnePrize}
                setGroupOnePrize={setGroupOnePrize}
            />
            <SelectNumbers
                title="Winning Numbers"
                numbers={winningNumbers}
                setNumbers={setWinningNumbers}
                maxSelection={6}
            />
            <SelectNumbers
                title="Additional Number"
                numbers={additionalNumber}
                setNumbers={setAdditionalNumber}
                maxSelection={1}
            />
            <StartSimulation
                winningNumbers={winningNumbers}
                additionalNumber={additionalNumber}
                groupOnePrize={groupOnePrize}
                startSimulation={startSimulation}
                setStartSimulation={setStartSimulation}
            />
        </div>
    );
};

export default Input;
