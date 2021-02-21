import React, { useEffect, useState } from "react";
import Button from "./Button";
import NextBack from "./NextBack";

const SelectNumbers = (props) => {
    const {
        winningNumbers,
        setWinningNumbers,
        additionalNumber,
        setAdditionalNumber,
        showBack,
        showNext,
        showThis,
    } = props;

    const [winningNumbersComplete, setWinningNumbersComplete] = useState(false);

    // Create numbers from 1 to 49 in an array
    const allNumbers = [];
    for (var i = 1; i < 50; i++) {
        allNumbers.push(i);
    }

    useEffect(() => {
        if (winningNumbers.length === 6) {
            setWinningNumbersComplete(true);
        } else {
            setWinningNumbersComplete(false);
        }
    }, [winningNumbers]);

    const selectNumber = (number, e) => {
        var winningNumbersCopy = [...winningNumbers];

        // Checks if the number is already selected
        for (var i = 0; i < winningNumbersCopy.length; i++) {
            // If the number is selected, this action unselects it
            if (winningNumbersCopy[i] === number) {
                winningNumbersCopy.splice(i, 1);
                setWinningNumbers(winningNumbersCopy);

                e.currentTarget.classList.toggle("selected");
                return;
            } else if (
                additionalNumber.length === 1 &&
                additionalNumber[0] === number
            ) {
                setAdditionalNumber([]);
                e.currentTarget.classList.toggle("selected-additional");
                return;
            }
        }

        // Otherwise select the number
        if (!winningNumbersComplete) {
            console.log("this runs");
            e.currentTarget.classList.toggle("selected");
            setWinningNumbers([...winningNumbers, number]);
        } else {
            console.log("this ran");
            e.currentTarget.classList.toggle("selected-additional");
            setAdditionalNumber([number]);
        }
    };

    const validation = () => {
        if (winningNumbersComplete && additionalNumber.length === 0) {
            return { error: "Please select 1 additional number" };
        } else if (!winningNumbersComplete) {
            return { error: "Please select 6 winning numbers" };
        } else {
            return {};
        }
    };

    const displayText = () => {
        if (!winningNumbersComplete) {
            return "Select 6 Winning Numbers";
        } else if (additionalNumber.length === 0) {
            return "Select 1 Additional Number";
        } else {
            return "Click next to continue";
        }
    };

    return (
        <div className="row my-3 justify-content-center">
            <div className="col-12 text-center">
                <h6>{displayText()}</h6>
            </div>
            <div className="col-12 col-md-8">
                <div className="row">
                    {allNumbers.map((number) => {
                        // Highlight the selected numbers
                        const selected = winningNumbers.includes(number);
                        const selectedAdditional = additionalNumber.includes(
                            number
                        );

                        return (
                            <div
                                key={number}
                                className={`col-2 p-2 number d-flex justify-content-center ${
                                    selected && "selected"
                                } ${
                                    selectedAdditional && "selected-additional"
                                }`}
                                onClick={(e) => selectNumber(number, e)}
                            >
                                {number}
                            </div>
                        );
                    })}
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

export default SelectNumbers;
