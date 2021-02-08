import React from "react";
import NextBack from "./NextBack";

const SetJackpot = (props) => {
    const { jackpot, setJackpot, showThis, showNext, showBack } = props;

    const handleInputChange = (event) => {
        setJackpot(event.target.value);
    };

    return (
        <div className="row my-3 justify-content-center">
            <div className="col-12 text-center">
                <h6>Enter the Group 1 jackpot for today</h6>
            </div>
            <div className="col-10">
                <div className="input-group mb-3">
                    <span className="input-group-text rounded-0">$</span>
                    <input
                        type="text"
                        className="form-control rounded-0"
                        aria-label="Amount (to the nearest dollar)"
                        value={jackpot}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <NextBack
                showThis={showThis}
                showNext={showNext}
                showBack={showBack}
            />
        </div>
    );
};

export default SetJackpot;
