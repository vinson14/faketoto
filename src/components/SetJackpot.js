import React from "react";
import NextBack from "./NextBack";

const SetJackpot = (props) => {
    const { jackpot, setJackpot, showThis, showNext, showBack } = props;

    const handleInputChange = (event) => {
        const re = /^[0-9\b]+$/;
        if (event.target.value === "" || re.test(event.target.value)) {
            setJackpot(event.target.value);
        }
    };

    const validation = () => {
        if (!jackpot) {
            return { error: "Please do not leave this blank" };
        } else if (!Number.isInteger(parseInt(jackpot))) {
            return { error: "Only numbers are allowed" };
        } else {
            return {};
        }
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
                validation={validation}
            />
        </div>
    );
};

export default SetJackpot;
