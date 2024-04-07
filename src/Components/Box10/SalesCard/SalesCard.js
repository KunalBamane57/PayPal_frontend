// SalesCard.js
import React from 'react'

const SalesCard = ({ img, heading, para, btn }) => {
  return (
    <div className="card p-8 bg-white">
      <div className="img">
        <img className="w-full" src={img} alt="" />
      </div>
      <div className="detail mt-6">
        <h1 className="text-2xl md:text-4xl font-semibold">{heading}</h1>
        <br />
        <p className="text-lg md:text-xl mb-6">{para}</p>
      </div>
      <div className="btn">
        <button className="text-lg md:text-xl bg-sky-600 text-white font-bold p-3 md:p-4 rounded-full">{btn}</button>
      </div>
    </div>
  )
}

export default SalesCard
 