import React, { useState } from "react";
import AdditionalNumber from "../components/AdditionalNumber";
import GroupOnePrize from "../components/GroupOnePrize";
import Input from "../components/Input";
import Intro from "../components/Intro";
import Layout from "../components/Layout";
import NextDraw from "../components/NextDraw";
import TableHeader from "../components/TableHeader";
import WinningNumbers from "../components/WinningNumbers";
import WinningShares from "../components/WinningShares";

const Results = () => {
    const [winningNumbers, setWinningNumbers] = useState([]);
    const [additionalNumber, setAdditionalNumber] = useState(7);
    const [groupOnePrize, setGroupOnePrize] = useState(5000000);

    return (
        <Layout>
            <Intro />
            <Input
                winningNumbers={winningNumbers}
                additionalNumber={additionalNumber}
                setWinningNumbers={setWinningNumbers}
                setAdditionalNumber={setAdditionalNumber}
            />

            <NextDraw />
            <div className="col-10">
                <TableHeader />
                <WinningNumbers winningNumbers={winningNumbers} />
                <AdditionalNumber additionalNumber={additionalNumber} />
                <GroupOnePrize groupOnePrize={groupOnePrize} />
                <WinningShares groupOnePrize={groupOnePrize} />
            </div>
        </Layout>
    );
};

export default Results;
