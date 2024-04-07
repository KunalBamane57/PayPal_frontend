import React from 'react'

const Smallcards = ({ imgSrc, heading, paragraph }) => {
  return (
    <div>
      <div className="card-1 flex flex-wrap flex-col text-center items-center">
            <img className='h-[120px] w-[120px] rounded-md' src={imgSrc} alt="" />
            <h1 className='text-4xl mt-5 mb-5 font-semibold'>{heading}</h1>
            <p className='w-[310px] text-xl'>{paragraph}</p>
        </div>
    </div>
  )
}

export default Smallcards
