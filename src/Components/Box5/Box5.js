import React from 'react'
import SmallCardMain from '../SmallCardMain/SmallCardMain'
import hero2 from '../Assets/hero2.png'

const Box5 = () => {
  return (
    <div>
      <div className="container-1 flex flex-wrap justify-center my-32 gap-10">
        <div className="element-10">
            <SmallCardMain
            heading="Leverage our dedicated customer network"
            paragraph="Our global network of 400+ million active accounts buys more and buys more often with Paypal."
            link="Learn about our extensive network"
            linkColor="text-sky-600"
            />
        </div>
        <div className="element-2">
            <img className='h-auto w-full max-w-[740px]' src={hero2} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Box5
