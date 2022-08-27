import React, { useState } from 'react';
import quotes from '../quotes.json';



const QuoteBox = ({ index, randomIndex }) => {  

    return (
        <div >
            <div className='quote'>
                <i class="fa-solid fa-quote-left"></i>
                <p className='text-center'>{quotes[index].quote}</p>
            </div>

            <p className='text-right'>{quotes[index].author}</p>
        </div>
    );
};

export default QuoteBox;
