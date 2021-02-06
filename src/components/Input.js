import React from "react";

const Input = (props) => {
    const {
        winningNumbers,
        additionalNumber,
        setWinningNumbers,
        setAdditionalNumber,
    } = props;

    const numbers = [];

    for (var i = 1; i < 50; i++) {
        numbers.push(i);
    }

    const selectWinningNumbers = (number, e) => {
        if (winningNumbers.length === 6) {
            alert("You can only select 6 winning numbers");
            return;
        }
        console.log(e.target.classList);
        e.target.classList.add("selected");
        setWinningNumbers([...winningNumbers, number]);
    };

    return (
        <div className="col-10">
            <p className="text-center">
                Select your winning numbers and select generate to watch the
                website emulate a real toto draw
            </p>
            <div className="row my-3">
                <p>Select 6 winning numbers</p>
                {numbers.map((number) => (
                    <div
                        className="col-2 d-flex justify-content-center"
                        key={number}
                        onClick={(e) => selectWinningNumbers(number, e)}
                    >
                        <button className="btn">{number}</button>
                    </div>
                ))}
            </div>

            <div className="row my-3">
                <p>Select 1 Additional number</p>
                {numbers.map((number) => (
                    <div className="col-2" key={number}>
                        <button className="btn">{number}</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Input;
