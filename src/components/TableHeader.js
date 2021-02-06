import React from "react";

const TableHeader = () => {
    return (
        <div className="row">
            <div className="col-6 table-header border border-end border-white">
                <p className="text-center text-white my-0 py-2">
                    Mon, 01 Feb 2021
                </p>
            </div>
            <div className="col-6 table-header border border-start border-white">
                <p className="text-center text-white my-0 py-2">
                    Draw No. 3888
                </p>
            </div>
        </div>
    );
};

export default TableHeader;
