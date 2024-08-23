import React from "react";


const Footer = () => {
  return (
    <>
      <footer className=" w-full z-50 backdrop-blur-md bg-white/30">
        <div className="flex flex-col justify-between text-red-500 content-center">
          <div className="flex space-x-5 ">
            <p className="text-lg  ml-2">CYNTAX EROR</p>
            <div className="w-12 h-12 bg-gray-600 rounded-full"></div>
            <div className="w-12 h-12 bg-gray-600 rounded-full"></div>
            <div className="w-12 h-12 bg-gray-600 rounded-full"></div>
            <div className="w-12 h-12 bg-gray-600 rounded-full"></div>
            <div className="w-12 h-12 bg-gray-600 rounded-full"></div>
           
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
