import React from "react";
import Button from "./Button";

const ReturnHome = (props) => {
    const { setStartSimulation } = props;

    return (
        <div className="col-5 d-flex justify-content-center">
            <Button onClick={() => setStartSimulation(false)}>
                Return Home
            </Button>
        </div>
    );
};

export default ReturnHome;
