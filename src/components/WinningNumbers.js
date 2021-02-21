import React, { useEffect, useState } from "react";

const WinningNumbers = (props) => {
    const { winningNumbers } = props;

    const [displayNumbers, setDisplayNumbers] = useState([winningNumbers[0]]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        console.log("useffect ran");

        const timeout = setTimeout(() => {
            if (currentIndex < winningNumbers.length - 1) {
                setDisplayNumbers([
                    ...displayNumbers,
                    winningNumbers[currentIndex + 1],
                ]);
                setCurrentIndex(currentIndex + 1);
            }
        }, 5000);

        return () => {
            clearTimeout(timeout);
            console.log("clear useeffect ran");
        };
    }, [winningNumbers, displayNumbers, currentIndex]);

    return (
        <div className="row mt-3">
            <div className="col-12 grey-table">
                <p className="my-0 text-center p-2">Winning Numbers</p>
            </div>
            {displayNumbers.map((number) => {
                return <Number number={number} key={number} />;
            })}
        </div>
    );
};

const Number = ({ number }) => {
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setDisplay(randomNumber());
        }, 30);

        const timeout = setTimeout(() => {
            clearInterval(interval);
            setDisplay(number);
        }, 5000);

        return () => {
            clearTimeout(timeout);
        };
    }, [number]);

    const randomNumber = () => {
        return Math.floor(Math.random() * 50);
    };

    return (
        <div className="col-2 light-grey-table">
            <p className="text-center my-0 py-2">{display}</p>
        </div>
    );
};

export default WinningNumbers;
