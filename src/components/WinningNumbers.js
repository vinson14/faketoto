import React from "react";

const WinningNumbers = (props) => {
    const { winningNumbers } = props;
    return (
        <div className="row mt-3">
            <div className="col-12 grey-table">
                <p className="my-0 text-center p-2">Winning Numbers</p>
            </div>
            {winningNumbers.map((number) => {
                return (
                    <div className="col-2 light-grey-table">
                        <p className="text-center my-0 py-2">{number}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default WinningNumbers;
