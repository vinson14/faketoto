import React from "react";
import numberWithCommas from "../utils/numberWithCommas";

const WinningShares = (props) => {
    const { groupOnePrize } = props;

    return (
        <div className="row mt-3">
            <div className="col-12 grey-table">
                <p className="my-0 text-center p-2">Winning Shares</p>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-center light-grey-table">
                <p className="text-center my-0">Prize Group</p>
            </div>
            <div className="col-5 d-flex align-items-center justify-content-center light-grey-table">
                <p className="text-center my-0">Share Amount</p>
            </div>
            <div className="col-4 d-flex align-items-center justify-content-center light-grey-table">
                <p className="text-center my-0">No. of Winning Shares</p>
            </div>
            <div className="col-12 light-grey-table">
                <p className="text-center my-0 py-2">
                    ${numberWithCommas(groupOnePrize)}
                </p>
            </div>
        </div>
    );
};

export default WinningShares;
