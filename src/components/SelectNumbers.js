import React from "react";

const SelectNumbers = (props) => {
    const { title, numbers, setNumbers, maxSelection } = props;

    // Create numbers from 1 to 49 in an array
    const allNumbers = [];
    for (var i = 1; i < 50; i++) {
        allNumbers.push(i);
    }

    const selectNumber = (number, e) => {
        var numbersCopy = [...numbers];

        // Checks if the number is already selected
        for (var i = 0; i < numbersCopy.length; i++) {
            // If the number is selected, this action unselects it
            if (numbersCopy[i] === number) {
                numbersCopy.splice(i, 1);
                setNumbers(numbersCopy);

                e.currentTarget.classList.toggle("selected");
                return;
            }
        }

        // Checks if the maximum number of numbers have been selected already
        if (numbers.length === maxSelection) {
            alert(`You can only select ${maxSelection} ${title}`);
            return;
        }

        // Otherwise select the number
        e.currentTarget.classList.toggle("selected");
        setNumbers([...numbers, number]);
    };

    return (
        <div className="row my-3">
            <div className="col-12 text-center">
                <h6>
                    Select {maxSelection} {title}
                </h6>
            </div>

            {allNumbers.map((number) => {
                // Ensures that the selected numbers are highlighted to the user
                const selected = numbers.includes(number);

                return (
                    <div
                        className={`col-2 d-flex justify-content-center ${
                            selected && "selected"
                        }`}
                        onClick={(e) => selectNumber(number, e)}
                    >
                        <button className="btn">{number}</button>
                    </div>
                );
            })}
        </div>
    );
};

export default SelectNumbers;
