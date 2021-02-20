import { useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
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
        <CSSTransition
            in={true}
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
            <Layout>
                <Row>
                    <div className="col-12 col-md-6">
                        <div className="row justify-content-center">
                            <NextDraw jackpot={jackpot} />

                            <div className="col-10">
                                <TableHeader />
                                <WinningNumbers
                                    winningNumbers={winningNumbers}
                                />
                                <AdditionalNumber
                                    additionalNumber={additionalNumber}
                                />
                                <GroupOnePrize jackpot={jackpot} />
                                <WinningShares jackpot={jackpot} />
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <ReturnHome />
                </Row>
            </Layout>
        </CSSTransition>
    );
};

export default Simulation;
