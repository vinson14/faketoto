import React from "react";
import NextDraw from "./NextDraw";
import TableHeader from "./TableHeader";
import WinningNumbers from "./WinningNumbers";
import WinningShares from "./WinningShares";
import AdditionalNumber from "./AdditionalNumber";
import GroupOnePrize from "./GroupOnePrize";
import ReturnHome from "./ReturnHome";

const Simulation = (props) => {
    const {
        winningNumbers,
        additionalNumber,
        groupOnePrize,
        setStartSimulation,
    } = props;

    return (
        <div className="col-12">
            <div className="row justify-content-center">
                <NextDraw groupOnePrize={groupOnePrize} />

                <div className="col-10 col-md-5 col-lg-4">
                    <TableHeader />
                    <WinningNumbers winningNumbers={winningNumbers} />
                    <AdditionalNumber additionalNumber={additionalNumber} />
                    <GroupOnePrize groupOnePrize={groupOnePrize} />
                    <WinningShares groupOnePrize={groupOnePrize} />
                </div>
                <ReturnHome setStartSimulation={setStartSimulation} />
            </div>
        </div>
    );
};

export default Simulation;
