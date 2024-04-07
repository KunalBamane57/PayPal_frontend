import React from 'react'
import img1 from '../Assets/img1.png'
import img2 from '../Assets/img2.png'
import img3 from '../Assets/img3.png'
import Smallcards from './card/Smallcards'

const Box3 = () => {
    return (
        <div>
            <div className="container-3 mt-20 flex flex-wrap flex-col items-center">
                <div className="element-1 text-center">
                    <h2 className='text-5xl'>Our connections, innovation, and intelligence make PayPal your <br /> strategic partner</h2>
                </div>
                <div className="element-1 flex justify-center gap-10 md:gap-40 text-base mt-20 mb-20 flex-wrap">
                    <Smallcards
                        imgSrc={img3}
                        heading="Connected"
                        paragraph="PayPal is a single point of entry to  payments expertise, tools, technology, and data that can help you compete and win."
                    />
                    <Smallcards
                        imgSrc={img1}
                        heading="Innovative"
                        paragraph="Stay agile,ahead of trends,and help safeguard against economic uncertainty with modular solutions that are easy to operationalize."
                    />
                    <Smallcards
                        imgSrc={img2}
                        heading="Intelligent"
                        paragraph="With one of the world's largest data sets,we help you understand customermodular behaviour,detect fraud,and capture 
                        more revenue across channels,devices,
                        and markets."
                    />
                </div>
            </div>
        </div>
    )
}

export default Box3

