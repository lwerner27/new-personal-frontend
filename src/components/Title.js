import React from "react";

const Title = ({ name }) => {
    return (
        <div className='title-container'>
            <h1 className='title'>{name}</h1>
        </div>
    );
};

export default Title;
