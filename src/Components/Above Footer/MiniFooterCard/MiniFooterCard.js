// MiniFooterCard.js
import React from 'react';

const MiniFooterCard = ({ heading, list_1, list_2, mini_head }) => {
    return (
        <div className="bg-white rounded-lg w-full mb-4 md:mb-0">
            <div className="px-4 py-6">
                <div className="text-xl font-bold text-blue-900 border-b-2 border-gray-300 mb-4 pb-2">
                    {heading}
                </div>
                <div className="flex flex-wrap gap-4 md:gap-40">
                    <div className="w-full md:w-36 font-semibold text-lg">
                        <ul>
                            {list_1.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full md:w-40 text-lg">
                    <div className="font-semibold">{mini_head}</div>
                        <ul>
                            {list_2.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiniFooterCard;
