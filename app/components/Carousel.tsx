"use client";
import React, { useState } from "react";
import Link from "next/link";
import Button from './Button'

const Carousel: React.FC = () => {
  return (
    <div className="bg-red-600 p-6 relative mt-20 flex justify-center">
      <div className="flex justify-evenly items-center w-4/5 ">
        <div className="w-[600px]">
          <h1 className="text-3xl text-white font-semibold leading-relaxed">
            Happy Kids. Happy Parents. Happy{" "}
            <span className="font-bold">listening</span>
          </h1>
          <h2 className="text-white mt-3">
            Bring hours of stories and years of joy to your little ones's life-
            and improve their speech in just four months. All with Toniebox
          </h2>
          <div className="pt-10 flex items-center gap-10">
            <Button btnColor="white" text="Shop Tonies" />
            <Link className="text-white underline" href={"/"}>Bundle and Save</Link>
          </div>
        </div>
        <img
          data-testid="media--image__image"
          src="https://res.cloudinary.com/tonies/image/fetch/f_auto,q_auto,w_400/https://images.ctfassets.net/l6vo76cztcax/2u7cW6yXKn6wOJpsUaMTKW/2bab88d3dc1f4389e704bad4f2900b15/1024x1024_1.png"
          alt="Customize your <em>Toniebox</em> Adventure"
          width="500"
          className="sc-5346dcc7-1 bkTFRO"
          srcSet="https://res.cloudinary.com/tonies/image/fetch/f_auto,q_auto,w_400/https://images.ctfassets.net/l6vo76cztcax/2u7cW6yXKn6wOJpsUaMTKW/2bab88d3dc1f4389e704bad4f2900b15/1024x1024_1.png 1x, https://res.cloudinary.com/tonies/image/fetch/f_auto,q_60,w_800/https://images.ctfassets.net/l6vo76cztcax/2u7cW6yXKn6wOJpsUaMTKW/2bab88d3dc1f4389e704bad4f2900b15/1024x1024_1.png 1.49x"
        />
      </div>
    </div>
  );
};

export default Carousel;

// the below
