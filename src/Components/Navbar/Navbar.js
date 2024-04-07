import React from 'react';
import logo from '../Assets/logo.png';

const Navbar = () => {
  return (
    <nav className="nav flex flex-col md:flex-row h-auto md:h-24 items-center justify-between p-5">
      <div className="box-1 flex flex-col md:flex-row items-center w-full md:w-4/5">
        <div className="logo flex items-center justify-center w-1/8">
          <img className="h-[85px] w-[90px] md:h-full" src={logo} alt="" />
        </div>
        <div className="menu flex flex-col md:flex-row w-4/5 md:gap-10 mx-10 md:items-center text-center md:text-lg text-blue-900 font-semibold">
          <a href="#" className="nav-link">Personal</a>
          <a href="#" className="nav-link">Business</a>
          <a href="#" className="nav-link">Developer</a>
          <a href="#" className="nav-link">Help</a>
        </div>
      </div>
      <div className="login flex flex-col md:flex-row gap-4 justify-center items-center w-full md:w-1/5 md:pr-6 text-center md:text-blue-900">
        <button className="border-2 border-blue-800 p-2 rounded-full px-6 text-lg font-semibold max-w-[120px] md:max-w-xs md:w-auto">Log In</button>
        <button className="bg-blue-900 text-slate-50 p-2 rounded-full px-6 text-lg font-semibold max-w-[120px] md:max-w-xs md:w-auto">Signup</button>
      </div>
    </nav>
  );
};

export default Navbar;
