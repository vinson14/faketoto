import React from "react";
import numberWithCommas from "../utils/numberWithCommas";

const WinningShares = (props) => {
    const { jackpot } = props;

    const winningShares = [
        {
            group: 1,
            shareAmount: jackpot,
            shares: 1,
        },
        {
            group: 2,
            shareAmount: 188888,
            shares: 8,
        },
        {
            group: 3,
            shareAmount: 1388,
            shares: 568,
        },
        {
            group: 4,
            shareAmount: 388,
            shares: 1288,
        },
        {
            group: 5,
            shareAmount: 50,
            shares: 30888,
        },
        {
            group: 6,
            shareAmount: 25,
            shares: 33688,
        },
        {
            group: 7,
            shareAmount: 10,
            shares: 588888,
        },
    ];

    return (
        <div className="row mt-3">
            <div className="col-12 p-0">
                <table className="table table-bordered text-center">
                    <thead className="grey-table">
                        <tr>
                            <th colSpan={3}>Winning Shares</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Prize Group</th>
                            <th>Share Amount</th>
                            <th>No. of Winning Shares</th>
                        </tr>
                        {winningShares.map((share) => {
                            return (
                                <tr key={share.group}>
                                    <td>Group {share.group}</td>
                                    <td>
                                        ${numberWithCommas(share.shareAmount)}
                                    </td>
                                    <td>{numberWithCommas(share.shares)}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WinningShares;
