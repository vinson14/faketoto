import React from "react";
import numberWithCommas from "../utils/numberWithCommas";

const GroupOnePrize = (props) => {
    const { groupOnePrize } = props;

    return (
        <div className="row mt-3">
            <div className="col-12 grey-table">
                <p className="my-0 text-center p-2">Group 1 Prize</p>
            </div>
            <div className="col-12 light-grey-table">
                <p className="text-center my-0 py-2">
                    ${numberWithCommas(groupOnePrize)}
                </p>
            </div>
        </div>
    );
};

export default GroupOnePrize;
