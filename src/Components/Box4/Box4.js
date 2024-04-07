import React from 'react';
import img4 from '../Assets/img4.png';
import SmallCardMain from '../SmallCardMain/SmallCardMain';

const Box4 = () => {
  return (
      <div className="container-1 bg-neutral-800 text-white flex flex-col justify-center md:flex-row md:items-center md:h-[550px] ">
        <div className="element-1 py-6 md:py-0 md: flex justify-center">
          <img className='h-[300px] mt-20 md:h-[550px] w-[80%] md:w-[700px]' src={img4} alt="" />
        </div>
        <div className="element-1 flex justify-center md:justify-start md:ml-8 pb-20">
          <SmallCardMain
            heading="Harness our powerful platform"
            paragraph="Accelerate growth and easily scale with our flexible features and tools that can be customized for your exact use cases."
            link="Learn about our platform"
            linkColor="text-cyan-500"
          />
        </div>
      </div>
  );
};

export default Box4;
