import React from "react";
import Button from "./Button";

const NextBack = (props) => {
    const { showThis, showNext, showBack, validation } = props;

    const next = () => {
        if (validation().error) {
            alert(validation().error);
            return;
        }
        showThis(false);
        showNext(true);
    };

    const back = () => {
        showThis(false);
        showBack(true);
    };

    return (
        <div className="col-12">
            <div className="row justify-content-center">
                <div className="col-3 d-flex justify-content-center">
                    <Button onClick={back}>Back</Button>
                </div>
                <div className="col-3 d-flex justify-content-center">
                    <Button onClick={next}>Next</Button>
                </div>
            </div>
        </div>
    );
};

export default NextBack;
