import React from 'react'
import keyboard from '../Assets/keyboard.png'

const Box8 = () => {
  return (
    <div className="container-1 bg-blue-950 flex flex-col md:flex-row justify-center items-center md:h-[500px]">
      <div className="element-1 text-white text-center md:text-left md:w-1/2 pt-10">
        <h1 className='h-20 text-4xl'><i className="fa-solid fa-quote-left"></i></h1>
        <p className='text-2xl mb-5'>The truth must be told. We are here because of PayPal. <br />
        I am inspired by what PayPal is doing and we want to <br />
        continue to grow with PayPal.</p>
        <p className='mb-5'>Vipin Sahu <br />
        Co-Founder</p>
        <h3 className='text-lg font-bold'>Webkul</h3>
      </div>
      <div className="element-1 mt-5 md:mt-[-100px]">
        <img className='h-auto max-w-full md:max-w-[600px]' src={keyboard} alt="" />
      </div>
    </div>
  )
}

export default Box8
