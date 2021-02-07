import React from "react";

const Button = (props) => {
    const { children, onClick } = props;

    return (
        <button className="btn btn-pri rounded-0" onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
