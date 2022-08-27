import React from 'react';

const Button = ( { randomIndex, randomColor } ) => {
    return (
        <div className='button'>
            <button onClick={randomIndex} style={{ background: randomColor }} >
                <i className="fa-solid fa-angle-right"></i>
            </button>
        </div>
    );
};

export default Button;