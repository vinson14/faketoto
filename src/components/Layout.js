import React from "react";

const Layout = ({ children }) => {
    return (
        <div className="container">
            {children.map((child) => (
                <div className="row justify-content-center my-3">{child}</div>
            ))}
        </div>
    );
};

export default Layout;
