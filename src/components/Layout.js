import React from "react";

const Layout = ({ children }) => {
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center">
            {children}
        </div>
    );
};

export default Layout;
