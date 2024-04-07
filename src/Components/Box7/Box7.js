import React from 'react'
import spon from '../Assets/spon.png'

const Box7 = () => {
  return (
    <div className="container-3 mt-20 flex flex-wrap justify-center items-center pb-20">
      <div className="element-1 text-center mb-8">
        <h2 className='text-3xl font-semibold'>We help drive growth for some of the world's most <br />
        forward-looking brands</h2>
      </div>
      <div className="element-1 flex justify-center">
        <img className="max-w-full" src={spon} alt="" />
      </div>
    </div>
  )
}

export default Box7
