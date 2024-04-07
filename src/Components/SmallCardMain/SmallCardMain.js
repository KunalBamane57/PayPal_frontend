import React from 'react';

const SmallCardMain = ({ heading, paragraph, link, linkColor }) => {
  return (
    <div className="element-1 w-full md:w-[523px] px-4">
      <h1 className='text-4xl mb-8 font-semibold'>{heading}</h1>
      <p className='text-xl'>{paragraph}</p>
      <h4 className={`mt-7 text-xl ${linkColor} font-bold`}>
        <span>{link}</span>
        <span style={{ fontSize: '2rem', marginLeft: '5px', position: 'relative', display: 'inline-block'}}>
          &#10230;
          <span style={{ 
            position: 'absolute', 
            top: '60%', 
            transform: 'translate(-50%, -50%)', 
            left: '100%', 
            marginLeft: '-10px', 
            width: '30px', 
            height: '30px', 
            backgroundColor: 'rgba(173, 216, 230, 0.5)', 
            borderRadius: '50%', 
            opacity: '0.5' 
          }}></span>
        </span>
      </h4>
    </div>
  );
};

export default SmallCardMain;
