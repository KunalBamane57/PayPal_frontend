// Box10.js
import React from 'react'
import SalesCard from './SalesCard/SalesCard'
import team from '../Assets/team.jpg'
import code from '../Assets/code.jpg'

const Box10 = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
          <SalesCard
            img={team}
            heading="Contact our sales team"
            para="Learn how payments can be leveraged as a catalyst for growth."
            btn="Contact Sales"
          />
          <SalesCard
            img={code}
            heading="Explore developer documentation"
            para="See how our flexible and interoperable technology helps to simplify integration."
            btn="Visit Developer Docs"
          />
        </div>
      </div>
    </div>
  )
}

export default Box10
