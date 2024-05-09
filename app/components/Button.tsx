import React from "react";
import { AiOutlineRight } from "react-icons/ai";

interface props {
  btnColor: string;
  text: string;
}

const Button = ({ btnColor, text }: props) => {
  return (
    <>
      <button
        className={`${
          btnColor === "white"
            ? "bg-white text-red-600 shadow-white"
            : "bg-red-600 text-white shadow-red-700"
        } px-4 py-2 rounded-full shadow-md  flex items-center gap-2 text-md`}
      >
        {text}{" "}
        <span>
          <AiOutlineRight />
        </span>
      </button>
    </>
  );
};

export default Button;
