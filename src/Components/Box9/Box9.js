import React from 'react'
import SmallCardMain from '../SmallCardMain/SmallCardMain'
import flight from '../Assets/flight.jpg'
import MiniCardMain from '../MiniCardMain/MiniCardMain'

const Box9 = () => {
    return (
        <div>
            <div className="outer-con">
                <div className="container-1 flex flex-wrap justify-center gap-5 mb-32">
                    <div className="element-1 mt-32 flex flex-col items-center">
                        <div className="smallelement-1 h-[460px] border-r-2 border-gray-300 px-16">
                            <SmallCardMain
                                heading="Case study: Payout options help reassure sellers as they join Walmart's Marketplace"
                                paragraph="America's largest retailer partnered with PayPal to give its curated community of sellers the payout options they needed and grew their network by 130% in the process."
                                link="Read the case study"
                                linkColor="text-sky-600"
                            />
                        </div>
                        <div className="element-2 border border-gray-300 w-[500px]"></div>
                        <div className="smallelement-2 border-r-2 border-gray-300 h-[380px] pt-20">
                            <MiniCardMain
                                heading="Ebook: Everything you need to know about payment processing solutions"
                                paragraph="Your customers expect a seamless and secure digital purchasing experience. Learn how your business can provide it."
                                link="Read the ebook"
                            />
                        </div>

                    </div>
                    <div className="element-4">
                        <div className="smallelement-3 mt-4 md:mt-32 h-auto md:h-[480px] max-w-full md:w-[550px] mx-20">
                            <img className='h-auto w-full md:h-[550px] md:w-auto rounded-sm' src={flight} alt="" />
                        </div>
                        <div className="smallelement-4 h-auto md:h-[200px] mt-4 md:mt-28 w-full md:w-auto">
                            <MiniCardMain
                                heading="News: United introduces QR codes to inflight payment options"
                                paragraph="New partnership enables United customers to buy snacks, drink, and other inflight purchases by using their PayPal app."
                                link="Read the article"
                            />
                        </div>
                    </div>

                </div>
            </div>
            <div className="outer-con text-xl bg-gray-100 mx-4 md:mx-24 p-4 md:p-8 pr-4 md:pr-32 px-4 md:px-14 mb-8 md:mb-16">
                <div className="flex flex-col md:flex-row items-center">
                    <span className="mb-4 md:mb-0 md:mr-10">Looking for an out-of-the-box commerce solution?</span>
                    <span className="text-sky-600 font-semibold">
                        See how you can get started today
                        <span className="ml-2 md:ml-4" style={{ fontSize: '1.5rem', position: 'relative', display: 'inline-block', verticalAlign: 'middle' }}>
                            &#10230;
                            <span style={{
                                position: 'absolute',
                                top: '50%',
                                transform: 'translate(-50%, -50%)',
                                left: '100%',
                                marginLeft: '-8px',
                                width: '24px',
                                height: '24px',
                                backgroundColor: 'rgba(173, 216, 230, 0.5)',
                                borderRadius: '50%',
                                opacity: '0.5'
                            }}></span>
                        </span>
                    </span>
                </div>
            </div>

        </div>
    )
}

export default Box9
