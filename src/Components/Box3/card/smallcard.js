import React from 'react';

const SmallCard = ({ imgSrc, heading, paragraph }) => {
    return (
        <div className="card-1 flex items-center justify-center">
            <img className="w-full md:w-auto" src={imgSrc} alt="" />
            <h1 className="text-center text-xl md:text-2xl mt-4">{heading}</h1>
            <p className="text-center text-sm md:text-base mt-2">{paragraph}</p>
        </div>
    );
};
 
export default SmallCard;
