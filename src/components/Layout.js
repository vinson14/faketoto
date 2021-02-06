import React from "react";
import Container from "./Container";

const Layout = ({ children }) => {
    console.log(children);
    return (
        <Container>
            {children.map((child) => (
                <div className="row justify-content-center my-3">{child}</div>
            ))}
        </Container>
    );
};

export default Layout;
