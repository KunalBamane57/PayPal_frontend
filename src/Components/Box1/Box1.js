// Box1.js
import React from 'react';
import hero1 from '../Assets/hero1.png';
import './Box1.css';

const Box1 = () => {
  return (
    <div>
      <div className="container-1 h-[auto] md:h-[530px] border border-black bg-blue-950 flex flex-col md:flex-row">
        <div className="element-1 text-slate-50 flex flex-col justify-center w-full md:w-1/2 p-6 md:p-20">
          <h1 className='text-5xl mb-6 md:mb-10'>Capture the full potential <br /> of commerce</h1>
          <p className='text-slate-50 mb-6 md:mb-10'>PayPal helps businesses find active buyers, increase <br /> conversion across channels, and scale into new markets.</p>
          <button className='bg-slate-50 text-sky-700 font-bold p-0 rounded-full px-4 md:px-0 w-full md:w-[150px] h-12'>Contact Sales</button>
        </div>
        <div className="element-2 flex flex-col items-center w-full md:w-1/2">
          <img className='mt-6 md:mt-[41px] h-auto md:h-[627px] m-5' src={hero1} alt="" />
          <div className="togglebar mt-0 p-2 md:p-4 pl-6 md:pl-20 ml-0 md:ml-56 rounded-t-xl border border-gray-400 text-lg font-bold bg-white">
            PayPal Assistant  <span className='text-xl ml-2 md:ml-10 mr-3'>^</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box1;
