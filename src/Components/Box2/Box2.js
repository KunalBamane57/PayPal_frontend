// Box2.js
import React from 'react';
import img6 from '../Assets/img6.png';

const Box2 = () => {
  return (
    <div>
      <div className="container-1 h-[auto] md:h-[700px] pt-[150px] bg-slate-100 flex flex-col lg:flex-row justify-center items-center">
        <div className="element-1 text-[3rem] lg:w-[50%] m-5 flex justify-center items-center font-semibold tracking-wide">
          <h1>PayPal is trusted by <br /> businesses and <br /> consumers around the <br /> world </h1>
        </div>
        <div class="element-2 w-full lg:w-1/2 flex justify-center items-center">
          <img class="h-auto lg:max-h-[400px]" src={img6} alt="" />
        </div>

      </div>
    </div>
  );
};

export default Box2;
