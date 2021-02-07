import React from "react";

const SetGroupOnePrize = (props) => {
    const { groupOnePrize, setGroupOnePrize } = props;

    const handleInputChange = (event) => {
        setGroupOnePrize(event.target.value);
    };

    return (
        <div className="row my-3 justify-content-center">
            <div className="col-12 text-center">
                <h6>Enter the Group 1 jackpot for today</h6>
            </div>
            <div className="col-8">
                <div className="input-group mb-3">
                    <span className="input-group-text rounded-0">$</span>
                    <input
                        type="text"
                        className="form-control rounded-0"
                        aria-label="Amount (to the nearest dollar)"
                        value={groupOnePrize}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default SetGroupOnePrize;
