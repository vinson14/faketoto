import React, { useState } from "react";
import AdditionalNumber from "../components/AdditionalNumber";
import GroupOnePrize from "../components/GroupOnePrize";
import Layout from "../components/Layout";
import NextDraw from "../components/NextDraw";
import TableHeader from "../components/TableHeader";
import WinningNumbers from "../components/WinningNumbers";
import WinningShares from "../components/WinningShares";

const Home = () => {
    const [winningNumbers, setWinningNumbers] = useState([1, 2, 3, 4, 5, 6]);
    const [additionalNumber, setAdditionalNumber] = useState(7);
    const [groupOnePrize, setGroupOnePrize] = useState(5000000);

    return (
        <Layout>
            <NextDraw />
            <div className="row justify-content-center mt-3">
                <div className="col-10">
                    <TableHeader />
                    <WinningNumbers winningNumbers={winningNumbers} />
                    <AdditionalNumber additionalNumber={additionalNumber} />
                    <GroupOnePrize groupOnePrize={groupOnePrize} />
                    <WinningShares groupOnePrize={groupOnePrize} />
                </div>
            </div>
        </Layout>
    );
};

export default Home;
