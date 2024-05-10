import React from "react";
import Button from "./Button";
import Image from "next/image";

interface props {
  image: string;
  btnText: string;
}
const Card: React.FC<{ data: props }> = ({ data }) => {
  return (
    <div className="relative rounded-lg  ">
      <Image
        src={data?.image}
        alt=""
        width={350}
        height={350}
        className=" rounded-md w-[350px] h-[350px]"
      />
      <div className="absolute bottom-4 flex justify-center items-center  w-full">
        <Button btnColor="red" text={data?.btnText.toUpperCase()} />
      </div>
    </div>
  );
};

export default Card;
