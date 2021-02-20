import React from "react";
import Button from "./Button";
import Row from "./Row";

const Intro = (props) => {
    const { setShowSelectWinning } = props;

    return (
        <Row>
            <div className="col-10">
                <h1 className="display-2 text-center">Fake Toto</h1>
                <p className="text-center">
                    This is a prank website to prank your family and friends
                    <br />
                    <br /> Select your winning numbers and select generate to
                    watch the website simulate a real toto draw
                    <br />
                    <br />
                    This website is in no way affiliated with Singapore Pools
                    Limited.
                </p>
            </div>
            <div className="col-3 d-flex justify-content-center">
                <Button onClick={() => setShowSelectWinning(true)}>
                    Start
                </Button>
            </div>
        </Row>
    );
};

export default Intro;
