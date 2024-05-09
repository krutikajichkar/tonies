import React from "react";
import { BsCart } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { CiPlay1 } from "react-icons/ci";
const ItemsSection = () => {
  return (
    <>
      <h1 className="text-2xl font-medium mb-3 ml-32">
        A <span className="text-3xl font-bold text-red-600 italic">friend</span>{" "}
        for every adventure!
      </h1>
      <div className="flex flex-wrap gap-4 justify-center">
        <div className="w-[300px] rounded-md flex flex-col gap-2 justify-center items-center border-2 border-gray-400 relative">
          <img
            className="w-[300px] "
            src="https://res.cloudinary.com/tonies/image/fetch/f_auto,q_60,w_1080/https://images.ctfassets.net/l6vo76cztcax/q3QiyzI1bAoGS76SeM02D/6af3ae04f799116126a1d14fcba7074a/Unbenannt-1.png"
            alt=""
          />
          <h2 className="text-center text-lg font-semibold" >Outdoor Adventures with JJ </h2>
          <span>Cocomelon</span>
          <div className="flex justify-end p-4 gap-3 items-center w-full">
            <h3>€16.99</h3>
            <div className="bg-red-600 rounded-full text-white text-xl flex justify-center p-2 font-semibold">
              <BsCart />
            </div>
          </div>
          <div className="text-2xl border-2 border-gray-200 rounded-full p-2 absolute top-3 right-3">
            <FaRegHeart />
          </div>
          <div className="text-2xl border-2 border-gray-200 rounded-full p-2 absolute top-3 left-3">
            <CiPlay1 />
          </div>
        </div>

        {/* // */}

        <div className="w-[300px] rounded-md flex flex-col gap-2 justify-center items-center border-2 border-gray-400 relative">
          <img
            className="w-[300px] "
            src="https://res.cloudinary.com/tonies/image/fetch/f_auto,q_60,w_1080/https://images.ctfassets.net/l6vo76cztcax/q3QiyzI1bAoGS76SeM02D/6af3ae04f799116126a1d14fcba7074a/Unbenannt-1.png"
            alt=""
          />
          <h2 className="text-center text-lg font-semibold">Outdoor Adventures with JJ </h2>
          <span>Cocomelon</span>
          <div className="flex justify-end p-4 gap-3 items-center w-full">
            <h3>€16.99</h3>
            <div className="bg-red-600 rounded-full text-white text-xl flex justify-center p-2 font-semibold">
              <BsCart />
            </div>
          </div>
          <div className="text-2xl border-2 border-gray-200 rounded-full p-2 absolute top-3 right-3">
            <FaRegHeart />
          </div>
          <div className="text-2xl border-2 border-gray-200 rounded-full p-2 absolute top-3 left-3">
            <CiPlay1 />
          </div>
        </div>

        {/* // */}

        <div className="w-[300px] rounded-md flex flex-col gap-2 justify-center items-center border-2 border-gray-400 relative">
          <img
            className="w-[300px] "
            src="https://res.cloudinary.com/tonies/image/fetch/f_auto,q_60,w_1080/https://images.ctfassets.net/l6vo76cztcax/q3QiyzI1bAoGS76SeM02D/6af3ae04f799116126a1d14fcba7074a/Unbenannt-1.png"
            alt=""
          />
          <h2 className="text-center text-lg font-semibold">Outdoor Adventures with JJ </h2>
          <span>Cocomelon</span>
          <div className="flex justify-end p-4 gap-3 items-center w-full">
            <h3>€16.99</h3>
            <div className="bg-red-600 rounded-full text-white text-xl flex justify-center p-2 font-semibold">
              <BsCart />
            </div>
          </div>
          <div className="text-2xl border-2 border-gray-200 rounded-full p-2 absolute top-3 right-3">
            <FaRegHeart />
          </div>
          <div className="text-2xl border-2 border-gray-200 rounded-full p-2 absolute top-3 left-3">
            <CiPlay1 />
          </div>
        </div>

        {/* // */}

        <div className="w-[300px] rounded-md flex flex-col gap-2 justify-center items-center border-2 border-gray-400 relative">
          <img
            className="w-[300px] "
            src="https://res.cloudinary.com/tonies/image/fetch/f_auto,q_60,w_1080/https://images.ctfassets.net/l6vo76cztcax/q3QiyzI1bAoGS76SeM02D/6af3ae04f799116126a1d14fcba7074a/Unbenannt-1.png"
            alt=""
          />
          <h2 className="text-center text-lg font-semibold">Outdoor Adventures with JJ </h2>
          <span>Cocomelon</span>
          <div className="flex justify-end p-4 gap-3 items-center w-full">
            <h3>€16.99</h3>
            <div className="bg-red-600 rounded-full text-white text-xl flex justify-center p-2 font-semibold">
              <BsCart />
            </div>
          </div>
          <div className="text-2xl border-2 border-gray-200 rounded-full p-2 absolute top-3 right-3">
            <FaRegHeart />
          </div>
          <div className="text-2xl border-2 border-gray-200 rounded-full p-2 absolute top-3 left-3">
            <CiPlay1 />
          </div>
        </div>
      </div>

      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 53"
          preserveAspectRatio="none"
          style={{width:"100%",height:"100%",right:"0%"}}
        >
          <path
            fill="transparent"
            fill-rule="evenodd"
            d="m956.28 0c-89.002-.014-181.844 2.604-273.506 6.69-297.314 13.251-582.22 41.94-682.774 46.31v-53zm483.72 53c-103.825-39.665-283.891-52.953-483.421-53h483.421z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default ItemsSection;
