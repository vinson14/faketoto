import React from "react";

const AdditionalNumber = (props) => {
    const { additionalNumber } = props;
    return (
        <div className="row mt-3">
            <div className="col-12 grey-table">
                <p className="my-0 text-center p-2">Additional Number</p>
            </div>
            <div className="col-12 light-grey-table">
                <p className="text-center my-0 py-2">{additionalNumber}</p>
            </div>
        </div>
    );
};

export default AdditionalNumber;
