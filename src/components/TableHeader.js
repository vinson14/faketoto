import React from "react";

const TableHeader = () => {
    const datetime = new Date(Date.now());

    return (
        <div className="row">
            <div className="col-6 table-header border border-end border-white">
                <p className="text-center text-white my-0 py-2">
                    {datetime.toDateString()}
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
