// MiniFooter.js
import React from 'react'
import MiniFooterCard from './MiniFooterCard/MiniFooterCard'
import './MiniFooter.css'

const MiniFooter = () => {
    const smallToMediumBusinessList1 = [
        "Introduction",
        "Getting Started"
    ];

    const smallToMediumBusinessList2 = [
        "Accept Payments",
        "Make Payments",
        "Manage Risk",
        "Accelerate Growth",
        "Streamline Operations"
    ];

    const enterpriseList1 = [
        "Introduction",
        "Marketplaces & Partners"
    ];

    const enterpriseList2 = [
        "Accept Payments",
        "Make Payments",
        "Manage Risk",
        "Accelerate Growth",
        "Streamline Operations"
    ];

    const moreList = [
        "Nonprofits",
        "Pricing",
        "Resource Center"
    ];

    return (
        <div className="bg-white">
            <div className="container mx-auto py-12 px-6 md:px-0">
                <div className="element-1 text-gray-500">
                    <p className="text-center md:text-left">1 Nielsen Study, Commissioned by PayPal, July 2020 to September 2020 of 15,144 US consumers to understand and measure the impact that PayPal has for US-based large enterprise merchants across different verticals.</p>
                </div>
                <div className="element-2 flex flex-col md:flex-row gap-10 justify-center mx-auto mt-10">
                    <MiniFooterCard
                        heading="Small-to-Medium Business"
                        list_1={smallToMediumBusinessList1}
                        list_2={smallToMediumBusinessList2}
                        mini_head="All Solutions"
                    />
                    <MiniFooterCard
                        heading="Enterprise"
                        list_1={enterpriseList1}
                        list_2={enterpriseList2}
                        mini_head="Platform & Solutions"
                    />
                    <div className="another-card bg-white rounded-lg w-full md:w-96 mb-4 md:mb-0 pt-6 mx-3">
                        <div className="heading text-xl font-bold text-blue-900 border-b-2 border-gray-300 mb-4 pb-2 md:w-40">
                            More
                        </div>
                        <div className="li_1 font-semibold text-lg w-full md:w-36 list-none mt-4">
                            <ul>
                                {moreList.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiniFooter
