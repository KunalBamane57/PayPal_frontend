import React from 'react';

const MiniCardMain = ({ heading, paragraph, link }) => {
  return (
    <div>
      <div className="element-1 w-full md:w-[650px] px-20">
        <h1 className='text-2xl mb-8 font-bold'>{heading}</h1>
        <p className='text-xl'>{paragraph}</p>
        <h4 className='mt-7 text-xl text-sky-600 font-bold'>
          <span>{link}</span>
          <span style={{ fontSize: '2rem', marginLeft: '5px', position: 'relative', display: 'inline-block', verticalAlign:'top'}}>
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
    </div>
  );
};

export default MiniCardMain;
