import { useLocation } from "react-router-dom";
import AdditionalNumber from "../components/AdditionalNumber";
import GroupOnePrize from "../components/GroupOnePrize";
import Layout from "../components/Layout";
import NextDraw from "../components/NextDraw";
import ReturnHome from "../components/ReturnHome";
import Row from "../components/Row";
import TableHeader from "../components/TableHeader";
import WinningNumbers from "../components/WinningNumbers";
import WinningShares from "../components/WinningShares";

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Simulation = () => {
    const query = useQuery();

    // Get data from winning string
    const winningNumbers = [];
    for (var i = 0; i < 6; i++) {
        winningNumbers.push(query.get(`num${i}`));
    }
    const additionalNumber = [query.get("addNum")];
    const jackpot = query.get("jackpot");

    return (
        <Layout>
            <Row>
                <div className="col-12">
                    <div className="row justify-content-center">
                        <NextDraw jackpot={jackpot} />

                        <div className="col-10 col-md-5 col-lg-4">
                            <TableHeader />
                            <WinningNumbers winningNumbers={winningNumbers} />
                            <AdditionalNumber
                                additionalNumber={additionalNumber}
                            />
                            <GroupOnePrize jackpot={jackpot} />
                            <WinningShares jackpot={jackpot} />
                        </div>
                    </div>
                </div>
                <ReturnHome />
            </Row>
        </Layout>
    );
};

export default Simulation;
