import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const ReturnHome = (props) => {
    return (
        <div className="col-5 d-flex justify-content-center">
            <Button>
                <Link to="/new">Back</Link>
            </Button>
        </div>
    );
};

export default ReturnHome;
