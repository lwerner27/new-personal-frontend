import React from "react";

const Header = ({ name, children }) => {
    return (
        <div className='header'>
            <div className='title'>
                <h1 className='title__text'>{name}</h1>
                <h2 className='title__pitch'>
                    A Professionally assistive nerd
                </h2>
            </div>
            {children}
        </div>
    );
};

export default Header;
