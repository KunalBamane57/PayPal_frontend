import React from 'react'
import footer_logo from '../Assets/footer_logo.png'

const Footer = () => {
  return (
    <div>
      <div className="container-1 p-5 mb-16">
        <div className="element-1">
            <img className='bg-white h-[60px] ml-[-20px]' src={footer_logo} alt="" />
        </div>
        <div className="element-2 list-none flex flex-wrap gap-7 mt-4 mb-3 text-blue-900 font-bold border-b-2 border-gray-300 pb-6">
            <li>Help</li>
            <li>Contact</li>
            <li>Fees</li>
            <li>Security</li>
            <li>Apps</li>
            <li>Shop</li>
            <li>Enterprise</li>
            <li>Partners</li>
            <li>Feedback</li>
        </div>
        {/* <hr className='border-b-2 border-gray-300' /> */}
        <div className="element-3 flex flex-wrap justify-between  text-blue-950 font-bold">
            <div className="inner-element-1 list-none flex flex-wrap gap-7 mt-3">
                <li>About</li>
                <li>Newsroom</li>
                <li>Jobs</li>
                <li>Investor Relations</li>
                <li>Values in Action</li>
                <li>Public Policy</li>
                <li>Sitemap</li>
            </div>
            <div className="inner-element-2 list-none flex flex-wrap gap-7 mt-3">
                <li className='text-gray-500'>@1999-2022</li>
                <li>Accessibility</li>
                <li>Privacy</li>
                <li>Cookies</li>
                <li>Legal</li>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
