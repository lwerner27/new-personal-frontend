import React from "react";

const Button = ({ children }) => {
    return (
        <a className='btn btn--light btn__header' href='#'>
            {children}
        </a>
    );
};

export default Button;
