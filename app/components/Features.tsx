import React from "react";
import Button from "./Button";
import Image from "next/image";

const Features = () => {
  return (
    <>
      <div className="flex justify-center gap-4">
        <div className="w-[200px] ">
          <Image
            data-testid="image__image"
            src="https://res.cloudinary.com/tonies/image/fetch/f_auto,q_auto,w_320/https://images.ctfassets.net/l6vo76cztcax/3p0cb6n77wExIoghsFh1m0/086e39c9f8759d94ee91869ae7ef209a/doodle-fb1.png"
            alt="1 of 6"
            width="150"
            height="150"
            className="sc-5346dcc7-1 bkTFRO"
            //srcSet="https://res.cloudinary.com/tonies/image/fetch/f_auto,q_auto,w_320/https://images.ctfassets.net/l6vo76cztcax/3p0cb6n77wExIoghsFh1m0/086e39c9f8759d94ee91869ae7ef209a/doodle-fb1.png 1x, https://res.cloudinary.com/tonies/image/fetch/f_auto,q_60,w_640/https://images.ctfassets.net/l6vo76cztcax/3p0cb6n77wExIoghsFh1m0/086e39c9f8759d94ee91869ae7ef209a/doodle-fb1.png 1.49x"
          />
          <p data-testid="paragraph" className="sc-kAyceB kbtROi text-xs -mt-3">
            Snuggable + durable for hands-on kids
          </p>
        </div>

        <div className="w-[200px] ">
          <Image
            data-testid="image__image"
            src="https://res.cloudinary.com/tonies/image/fetch/f_auto,q_auto,w_320/https://images.ctfassets.net/l6vo76cztcax/4LaL3sZpAOYUFCZqjL2xM5/8dab8c316cdfeaf6994a8a94a4e600c5/ED_Toniebox_Beine_1.png"
            alt="2 of 6"
            width="150"
            height="150"
            className="sc-5346dcc7-1 bkTFRO"
            //srcSet="https://res.cloudinary.com/tonies/image/fetch/f_auto,q_auto,w_320/https://images.ctfassets.net/l6vo76cztcax/4LaL3sZpAOYUFCZqjL2xM5/8dab8c316cdfeaf6994a8a94a4e600c5/ED_Toniebox_Beine_1.png 1x, https://res.cloudinary.com/tonies/image/fetch/f_auto,q_60,w_640/https://images.ctfassets.net/l6vo76cztcax/4LaL3sZpAOYUFCZqjL2xM5/8dab8c316cdfeaf6994a8a94a4e600c5/ED_Toniebox_Beine_1.png 1.49x"
          />
          <p data-testid="paragraph" className="sc-kAyceB kbtROi text-xs -mt-3">
            Portable + available offline after setup
          </p>
        </div>

        <div className="w-[200px] ">
          <span
            className="sc-5346dcc7-0 gjPqwE image__container"
            data-testid="image__container"
          >
            <Image
              data-testid="image__image"
              src="https://res.cloudinary.com/tonies/image/fetch/f_auto,q_auto,w_320/https://images.ctfassets.net/l6vo76cztcax/4hSmzC9xmzXIGMHCTkGYd6/eb907d60867ad50534a31e59dc78f2dc/Our_community_-_IG_images__4_.png"
              alt="3 of 6"
              width="150"
              height="150"
              className="sc-5346dcc7-1 bkTFRO"
              //srcSet="https://res.cloudinary.com/tonies/image/fetch/f_auto,q_auto,w_320/https://images.ctfassets.net/l6vo76cztcax/4hSmzC9xmzXIGMHCTkGYd6/eb907d60867ad50534a31e59dc78f2dc/Our_community_-_IG_images__4_.png 1x, https://res.cloudinary.com/tonies/image/fetch/f_auto,q_60,w_640/https://images.ctfassets.net/l6vo76cztcax/4hSmzC9xmzXIGMHCTkGYd6/eb907d60867ad50534a31e59dc78f2dc/Our_community_-_IG_images__4_.png 1.49x"
            />
          </span>
          <p data-testid="paragraph" className="sc-kAyceB kbtROi text-xs -mt-3">
            Up to 7 hours battery time
          </p>
        </div>

        <div className="w-[200px] ">
          <span
            className="sc-5346dcc7-0 gjPqwE image__container"
            data-testid="image__container"
          >
            <Image
              data-testid="image__image"
              src="https://res.cloudinary.com/tonies/image/fetch/f_auto,q_auto,w_320/https://images.ctfassets.net/l6vo76cztcax/373BOTsQhB3PbR02LJhNDS/8274152b7bab1b0139ec3e5f1fa0fa9a/ED_Kopfhoerer_1.png"
              alt="4 of 6"
              width="150"
              height="150"
              className="sc-5346dcc7-1 bkTFRO"
              //srcSet="https://res.cloudinary.com/tonies/image/fetch/f_auto,q_auto,w_320/https://images.ctfassets.net/l6vo76cztcax/373BOTsQhB3PbR02LJhNDS/8274152b7bab1b0139ec3e5f1fa0fa9a/ED_Kopfhoerer_1.png 1x, https://res.cloudinary.com/tonies/image/fetch/f_auto,q_60,w_640/https://images.ctfassets.net/l6vo76cztcax/373BOTsQhB3PbR02LJhNDS/8274152b7bab1b0139ec3e5f1fa0fa9a/ED_Kopfhoerer_1.png 1.49x"
            />
          </span>
          <p data-testid="paragraph" className="sc-kAyceB kbtROi text-xs -mt-3">
            Headphone jack for quiet time
          </p>
        </div>

        <div className="w-[200px]  ">
          <span
            className="sc-5346dcc7-0 gjPqwE image__container"
            data-testid="image__container"
          >
            <Image
              data-testid="image__image"
              src="https://res.cloudinary.com/tonies/image/fetch/f_auto,q_auto,w_320/https://images.ctfassets.net/l6vo76cztcax/7ho9mtEiN1cXvbmCXVOvJW/65bdde84b1fb81aff9c525e4f69d945d/safety.png"
              alt="5 of 6"
              width="150"
              height="150"
              className="sc-5346dcc7-1 bkTFRO"
              //src="https://res.cloudinary.com/tonies/image/fetch/f_auto,q_auto,w_320/https://images.ctfassets.net/l6vo76cztcax/7ho9mtEiN1cXvbmCXVOvJW/65bdde84b1fb81aff9c525e4f69d945d/safety.png 1x, https://res.cloudinary.com/tonies/image/fetch/f_auto,q_60,w_640/https://images.ctfassets.net/l6vo76cztcax/7ho9mtEiN1cXvbmCXVOvJW/65bdde84b1fb81aff9c525e4f69d945d/safety.png 1.49x"
            />
          </span>
          <p data-testid="paragraph" className="sc-kAyceB kbtROi text-xs -mt-3">
            Safe and secure with parental settings
          </p>
        </div>

        <div className="w-[200px] ">
          <span
            className="sc-5346dcc7-0 gjPqwE image__container"
            data-testid="image__container"
          >
            <Image
              data-testid="image__image"
              src="https://res.cloudinary.com/tonies/image/fetch/f_auto,q_auto,w_320/https://images.ctfassets.net/l6vo76cztcax/UxajOFG1285XrpWyt1Nfv/46e7dd0f69c17eda8f7b1b77283907e4/playful.png"
              alt="6 of 6"
              width="150"
              height="150"
              className="sc-5346dcc7-1 bkTFRO"
              //srcSet="https://res.cloudinary.com/tonies/image/fetch/f_auto,q_auto,w_320/https://images.ctfassets.net/l6vo76cztcax/UxajOFG1285XrpWyt1Nfv/46e7dd0f69c17eda8f7b1b77283907e4/playful.png 1x, https://res.cloudinary.com/tonies/image/fetch/f_auto,q_60,w_640/https://images.ctfassets.net/l6vo76cztcax/UxajOFG1285XrpWyt1Nfv/46e7dd0f69c17eda8f7b1b77283907e4/playful.png 1.49x"
            />
          </span>
          <p data-testid="paragraph" className="sc-kAyceB kbtROi text-xs -mt-3">
            Easy one time 2.4 GHz wifi setup
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-20 flex-col items-center">
        <h1 className="text-2xl font-semibold">
          Sign up to the tonies-newsletter and be the first one to receive any
          good news!
        </h1>
       <div className="border-b-2 border-red-500 w-[300px] p-2">
       <input
          type="email"
          placeholder="Email Address"
          className=" outline-none mt-6 w-full "
        />
       </div>
       <div className="mt-10 ">
       <Button btnColor="red" text="Subscribe"/>
       </div>
       <h3 className="mt-10 w-[400px] text-center text-xs ">By clicking Subscribe, I consent to recieve marketing communication via email. Revokable at any time, free of charge. Privacy policy.</h3>
      </div>
    </>
  );
};

export default Features;
