import React from "react";
import Card from "./Card";
import { RestSectionData as restData } from "../utils/RestSectionData";
const RestSection = () => {
  return (
    <div className="mt-24">
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-3xl font-serif">
          <span className="text-red-600 font-bold font-serif italic ">
            Discover
          </span>{" "}
          our tonies® world
        </h1>
        <h2 className="mt-1 text-xl mb-2">
          When you put listening and playing together... something magical
          happens
        </h2>
      </div>
      <div className="flex gap-8 flex-wrap justify-center p-8 mt-10">
        {restData.map((data, i) => {
          return <Card data={data} key={i} />;
        })}
      </div>
      <div className="mt-20 text-gray-600 flex justify-center flex-col items-center">
        <h1 className="text-3xl ">One little box. Countless big adventures.</h1>
        <h3 className="w-3/4 text-center mt-1">
          Say goodbye to bright screens, scratched CDs, and complicated
          controls. With Tonies, children can ignite their imagination and
          immerse themselves in storytelling and audio adventures. It's as
          simple as placing a tonie on the Toniebox, and the audio begins to
          play. With countless stories to hear, songs to sing, and whole worlds
          to explore, the possibilities are endless.
        </h3>
        <h3 className="w-3/4 text-center mt-10">
          With our tonies® Europe online shop on www.tonies.com/en-eu/, we are
          shipping to the Netherlands, Belgium, Luxembourg, Spain, Portugal,
          Italy, Cyprus, Czech Republic, Estonia, Greece, Latvia, Lithuania,
          Poland, Slovenia, Finland, Sweden and Denmark.
        </h3>
      </div>
    </div>
  );
};

export default RestSection;
