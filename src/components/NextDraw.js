import React from "react";
import totoLogo from "../static/img/toto.png";
import numberWithCommas from "../utils/numberWithCommas";

const NextDraw = (props) => {
    const { jackpot } = props;

    const datetime = new Date(Date.now());

    return (
        <div className="col-12 col-md-6">
            <div className="row">
                <div className="col-3 d-flex justify-content-center align-items-center">
                    <img src={totoLogo} alt="Toto Logo" className="img-fluid" />
                </div>
                <div className="col-9">
                    <div className="row align-items-center h-100">
                        <div className="col-5 d-flex flex-column justify-content-center py-3">
                            <p className="my-0">Next Jackpot</p>
                            <p className="my-0">Next Draw</p>
                        </div>
                        <div className="col-7 d-flex flex-column justify-content-center py-3">
                            <p className="my-0">
                                ${numberWithCommas(jackpot)} est
                            </p>
                            <p className="my-0"> {datetime.toDateString()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NextDraw;
