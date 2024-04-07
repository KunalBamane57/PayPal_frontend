import React from 'react'
import globe from '../Assets/globe.png'
import SmallCardMain from '../SmallCardMain/SmallCardMain'
import './Box6.css'

const Box6 = () => {
  return (
    <div className="container-1 Box6 flex flex-wrap justify-center items-center gap-10 text-slate-50">
      <div className="element-1">
        <img className='h-auto w-full max-h-[500px]' src={globe} alt="" />
      </div>
      <div className="element-1 mb-10">
        <SmallCardMain
          heading="Optimize your payment processing"
          paragraph="Our mix of tools, technology, relationships, and data can help you process more transactions successfully and capture more revenue."
          link="Learn how to optimize payment processing"
          linkColor="text-cyan-400"
        />
      </div>
    </div>
  )
}

export default Box6
