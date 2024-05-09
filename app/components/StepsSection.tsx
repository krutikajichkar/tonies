import React from "react";
import { stepsData as steps } from "../utils/StepsData";
import Button from "./Button";
const StepsSection = () => {
  return (
    <div>
      <div className="bg-red-600 mt-10 text-white p-12 flex justify-center items-center flex-col">
        <h1 className="text-3xl font-semibold">
          The three steps to happy <span className="font-bold">listening</span>
        </h1>

        <h3 className="text-lg mt-1">
          That's right, it's as easy as 1, 2, 3...
        </h3>
      </div>
      <div className="flex justify-evenly mt-10 ">
        {steps.map((s, i) => {
          return (
            <div
              key={i}
              className="flex flex-col items-center justify-center w-[25%]  "
            >
              <img src={s.image} alt="" className="w-3/4" />
              <h2 className="text-2xl font-semibold mt-4">{s.heading}</h2>
              <p className="text-lg mt-2 text-center">{s.description}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-10 p-12 flex justify-center gap-12 items-center">
        <video
          data-testid="video-player--audioPlayButton__video"
          src="//videos.ctfassets.net/l6vo76cztcax/4s8PzNbOSFnmmmew1W0p37/2cc681d71021015a9f3a83f6a669dd22/lange_version_3.mp4"
          poster=""
          preload="metadata"
          className="sc-bb26e8f-2 jYGdRR w-[500px] h-[500px]"
        >
          Video Toniebox demo
        </video>
        <div className="w-[600px]">
          <h1 className="text-4xl font-semibold">
            So{" "}
            <span className="text-red-600 italic font-extrabold">
              easy to use
            </span>{" "}
            a three year old can explain it...
          </h1>
          <h3 className="mt-2">
            So intuitive, a young child can use it all on their own, keeping
            them enthralled for hours and leaving you to get on with the boring
            adult stuff.
          </h3>
          <div className="mt-10">
            <Button btnColor="red" text="BUY TONIEBOX"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsSection;
