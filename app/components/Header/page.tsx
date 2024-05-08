import React from "react";

const Header = () => {
  return (
    <div className="relative w-full ">
      <svg
        viewBox="0 0 638.390625 53"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="sc-bmzYkS hzoRDP relative "
      >
        <path
          d="M638.390625,39.8769231 L50.9638694,52.0806223 C23.8573903,53.101494 1.05566714,31.9549309 0.0347954342,4.84845174 C0.0116005326,4.23257405 7.54767359e-17,3.61631432 0,3 L0.0914746776,3.00059741 C1.7047047,29.5515707 24.2426583,50.0869842 50.9638694,49.0806223 L50.9638694,49.0806223 L638.390625,36.8769231 L638.390625,39.8769231 Z"
          fill="#D1D1D4"
        ></path>
        <path
          d="M0,0 L638.390625,0 L638.390625,36.8769231 L50.9638694,49.0806223 C23.8573903,50.101494 1.05566714,28.9549309 0.0347954342,1.84845174 C0.0116005326,1.23257405 7.54767359e-17,0.61631432 0,0 L0,0 L0,0 Z"
          fill="#FFF"
        ></path>
      </svg>
      
      <div className="flex justify-between w-full items-center px-44 py-10 absolute top-0">
        <div className="flex gap-8 items-center">
          <span
            className="sc-cgjDci jfzxaS image-v2-container"
            data-testid="imagev2-container"
          >
            <img
              data-testid="imagev2-image"
              src="https://images.ctfassets.net/l6vo76cztcax/54byI2c62blpOTL2LBAGyO/10328bd063218d3a0762e470644cdb90/logo-tonies.svg"
              srcSet="https://images.ctfassets.net/l6vo76cztcax/54byI2c62blpOTL2LBAGyO/10328bd063218d3a0762e470644cdb90/logo-tonies.svg 1x, https://images.ctfassets.net/l6vo76cztcax/54byI2c62blpOTL2LBAGyO/10328bd063218d3a0762e470644cdb90/logo-tonies.svg 1.49x"
              alt="tonies®"
              width="170"
              height="26"
              className="sc-djTQaJ cmmuMh"
            />
          </span>
          <ul className="flex gap-8 text-xl font-medium cursor-pointer">
            <li className=" hover:text-red-600">Toniebox</li>
            <li className=" hover:text-red-600">Tonies</li>
            <li className=" hover:text-red-600">Audio Content</li>
            <li className=" hover:text-red-600">Accessories</li>
            <li className=" hover:text-red-600">Bundles</li>
          </ul>
        </div>
        <div>
            <ul className="flex gap-8 text-xl font-medium cursor-pointer">
                <li className=" hover:text-red-600">Heart</li>
                <li className=" hover:text-red-600">Cart</li>
                <li className=" hover:text-red-600">Login</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
