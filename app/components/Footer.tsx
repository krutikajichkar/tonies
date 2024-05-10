import React from "react";
import { BiLogoTelegram } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineRight } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="bg-gray-700 text-white py-16 px-28 mt-10">
      <div className="flex justify-between">
        <div>
          <ul className="flex gap-14">
            <li className="flex gap-3 items-center">
              <span className="text-2xl">
                <BiLogoTelegram />
              </span>
              <span>Contact</span>
            </li>
            <li className="flex gap-3 items-center">
              <span className="text-2xl">
                <CiLocationOn />
              </span>
              <span>Change Region</span>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="flex gap-4 border-b-2 border-gray-300">
            <li className="border-b-2 border-red-600 h-full">tonies</li>
            <li>mytonies</li>
            <li>support</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-around mt-10">
        <ul>
          <li className="text-xl font-semibold p-2">About Us</li>
          <li className="p-2">About Us</li>
          <li className="p-2">Diversity & inclusion</li>
        </ul>
        <ul>
          <li className="text-xl font-semibold p-2">tonies® for...</li>
          <li className="p-2">Press</li>
          <li className="p-2">Investor Relations</li>
          <li className="p-2">Retailers</li>
        </ul>
        <ul>
          <li className="text-xl font-semibold p-2">Legal</li>
          <li className="p-2">Legal Information</li>
          <li className="p-2">Terms of Services</li>
          <li className="p-2">Privacy Policy</li>
          <li className="p-2">eWaste ans battery recycling</li>
          <li className="p-2">Vulnerability Disclosure Policy</li>
          <li className="p-2">European Digital Services Act</li>
          <li className="p-2">Cookie Settings</li>
        </ul>
        <div>
          <span className="text-xl font-semibold p-2 mb-6">Stay tuned!</span>
          <p className="w-[300px]">
            Sign up for our newsletter and be the first to hear about all the
            latest news and releases.
          </p>
          <div className="relative mt-6">
            <input
              type="text"
              placeholder="Your Email address"
              className="py-2 rounded-full px-4 "
            />
            <div className="text-2xl p-2 bg-red-600 rounded-full w-[40px] absolute top-0 right-12 ">
              <AiOutlineRight />
            </div>
          </div>
          <h3 className="w-[300px] mt-6">
            By submitting, I consent to recieve marketing communication via
            email. Revokable at any time, free of charge. Privacy policy.
          </h3>
        </div>
      </div>
      <div >
        <p data-testid="paragraph" className="sc-dhKdcB cfXCzn">
          Payment methods:
          </p>
          <div className="mt-2">
          <span className="sc-467394b6-4 gzwFdb">
            <span className="sc-208a6320-0 lkWNGv flex gap-4">
              <span className="sc-208a6320-1 eUXNjo">
                <span className="sc-16f6a3a5-0 dQtUlY ">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 26" className="w-[30px]">
                    <path fill="#fff" d="M0 0h40v26H0z"></path>
                    <path fill="#fff" d="M0 0h40v26H0z"></path>
                    <path
                      fill="#003086"
                      d="M25.36 5.36c-.84-.95-2.34-1.35-4.27-1.35H15.5a.8.8 0 0 0-.79.67L12.4 19.44a.48.48 0 0 0 .47.56h3.45l.87-5.5-.03.17a.8.8 0 0 1 .79-.67h1.64c3.22 0 5.74-1.31 6.48-5.1l.05-.32a3.57 3.57 0 0 0-.75-3.22"
                    ></path>
                    <path
                      fill="#003086"
                      d="M25.36 5.36c-.84-.95-2.34-1.35-4.27-1.35H15.5a.8.8 0 0 0-.79.67L12.4 19.44a.48.48 0 0 0 .47.56h3.45l.87-5.5-.03.17a.8.8 0 0 1 .79-.67h1.64c3.22 0 5.74-1.31 6.48-5.1l.05-.32a3.57 3.57 0 0 0-.75-3.22"
                    ></path>
                    <path
                      fill="#002f85"
                      d="M18.1 8.6a.7.7 0 0 1 .7-.6h4.38a9.15 9.15 0 0 1 1.45.11l.37.07.34.09.17.05a3.96 3.96 0 0 1 .6.26 3.57 3.57 0 0 0-.75-3.22c-.84-.95-2.34-1.35-4.27-1.35H15.5a.8.8 0 0 0-.79.67L12.4 19.44a.48.48 0 0 0 .47.56h3.45l.87-5.5.93-5.9z"
                    ></path>
                    <path
                      fill="#009bdd"
                      d="m26.11 8.58-.05.32c-.74 3.79-3.26 5.1-6.48 5.1h-1.64a.8.8 0 0 0-.79.67L16.31 20l-.24 1.5a.42.42 0 0 0 .42.5h2.9a.7.7 0 0 0 .7-.6l.02-.15.55-3.47.04-.2a.7.7 0 0 1 .69-.58h.43c2.82 0 5.03-1.15 5.67-4.46a3.8 3.8 0 0 0-.58-3.35 2.78 2.78 0 0 0-.8-.61"
                    ></path>
                    <path
                      fill="#012069"
                      d="M25.34 8.27 25 8.18a6.55 6.55 0 0 0-.37-.07 9.1 9.1 0 0 0-1.45-.1H18.8a.7.7 0 0 0-.7.59l-.92 5.9-.03.17a.8.8 0 0 1 .79-.67h1.64c3.22 0 5.74-1.31 6.48-5.1l.05-.32a3.98 3.98 0 0 0-.6-.26z"
                    ></path>
                  </svg>
                </span>
              </span>
              <span className="sc-208a6320-1 eUXNjo">
                <span className="sc-16f6a3a5-0 dQtUlY">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 26" className="w-[30px]">
                    <path fill="#fff" d="M0 0h40v26H0z"></path>
                    <g clip-path="url(#klarna_svg__a)">
                      <path
                        fill="#FFB3C7"
                        d="M34.54 3H5.46A3.46 3.46 0 0 0 2 6.46v13.08A3.46 3.46 0 0 0 5.46 23h29.08A3.46 3.46 0 0 0 38 19.54V6.46A3.46 3.46 0 0 0 34.54 3Z"
                      ></path>
                      <path
                        fill="#0A0B09"
                        d="M34.63 14.72a.86.86 0 0 0-.85.86c0 .47.38.86.85.86.48 0 .86-.39.86-.86a.86.86 0 0 0-.86-.86Zm-2.8-.67a1.2 1.2 0 0 0-1.23-1.18 1.2 1.2 0 0 0-1.23 1.18c0 .65.55 1.18 1.23 1.18a1.2 1.2 0 0 0 1.23-1.18Zm0-2.29h1.36v4.58h-1.36v-.3a2.3 2.3 0 0 1-1.34.43 2.4 2.4 0 0 1-2.4-2.42 2.4 2.4 0 0 1 3.74-2v-.29Zm-10.87.6v-.6h-1.4v4.58h1.4V14.2c0-.72.78-1.1 1.32-1.1h.01v-1.34c-.55 0-1.06.24-1.33.6Zm-3.47 1.7a1.2 1.2 0 0 0-1.23-1.19 1.2 1.2 0 0 0-1.23 1.18c0 .65.55 1.18 1.23 1.18a1.2 1.2 0 0 0 1.23-1.18Zm0-2.3h1.37v4.58H17.5v-.3c-.38.27-.85.43-1.35.43a2.4 2.4 0 0 1-2.4-2.42 2.4 2.4 0 0 1 3.75-2v-.29Zm8.19-.12c-.54 0-1.06.17-1.4.64v-.52h-1.36v4.58h1.37v-2.4c0-.7.47-1.04 1.02-1.04.6 0 .94.36.94 1.03v2.41h1.36v-2.91c0-1.07-.84-1.8-1.93-1.8Zm-13.9 4.7h1.42V9.72h-1.42v6.62Zm-6.25 0h1.5V9.72h-1.5v6.62Zm5.27-6.62a5.3 5.3 0 0 1-1.54 3.76l2.08 2.86H9.48l-2.26-3.11.58-.44a3.81 3.81 0 0 0 1.52-3.07h1.48Z"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="klarna_svg__a">
                        <path
                          fill="#fff"
                          d="M0 0h36v20H0z"
                          transform="translate(2 3)"
                        ></path>
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </span>
              <span className="sc-208a6320-1 eUXNjo">
                <span className="sc-16f6a3a5-0 dQtUlY">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 26" className="w-[30px]">
                    <path
                      fill="#fff"
                      d="M29.13 2.41H10.87C5.17 2.41.5 7.18.5 13.01a10.5 10.5 0 0 0 10.37 10.58h18.26c5.7 0 10.37-4.76 10.37-10.59 0-5.82-4.67-10.59-10.37-10.59Z"
                    ></path>
                    <path
                      fill="#3C4043"
                      d="M29.13 3.27c1.28 0 2.52.26 3.7.77a9.6 9.6 0 0 1 5.08 5.19 9.78 9.78 0 0 1 0 7.55 9.83 9.83 0 0 1-5.08 5.18 9.26 9.26 0 0 1-3.7.77H10.87a9.24 9.24 0 0 1-3.7-.77 9.6 9.6 0 0 1-5.08-5.18 9.78 9.78 0 0 1 0-7.55 9.83 9.83 0 0 1 5.08-5.19 9.24 9.24 0 0 1 3.7-.77h18.26Zm0-.86H10.87C5.17 2.41.5 7.18.5 13.01a10.5 10.5 0 0 0 10.37 10.58h18.26c5.7 0 10.37-4.76 10.37-10.59 0-5.82-4.67-10.59-10.37-10.59Z"
                    ></path>
                    <path
                      fill="#3C4043"
                      d="M19.1 13.75v3.2h-1v-7.9h2.64c.67 0 1.24.23 1.7.68.49.46.72 1.01.72 1.67a2.2 2.2 0 0 1-.71 1.68c-.46.45-1.03.67-1.7.67H19.1Zm0-3.73v2.76h1.66c.4 0 .73-.14.99-.4.26-.28.4-.6.4-.98 0-.36-.14-.68-.4-.95a1.28 1.28 0 0 0-.99-.42H19.1Zm6.67 1.35c.73 0 1.31.2 1.74.6.42.4.64.95.64 1.65v3.34h-.95v-.76h-.04a1.9 1.9 0 0 1-1.65.93 2.1 2.1 0 0 1-1.46-.53c-.4-.35-.6-.8-.6-1.32 0-.56.21-1 .63-1.34.41-.33.97-.5 1.66-.5.59 0 1.07.12 1.45.34v-.23c0-.36-.13-.65-.4-.9a1.4 1.4 0 0 0-.97-.37c-.56 0-1 .24-1.32.72l-.88-.56a2.42 2.42 0 0 1 2.15-1.07Zm-1.29 3.92c0 .27.11.5.33.67.22.17.48.26.78.26.42 0 .79-.16 1.12-.48.32-.31.49-.68.49-1.11a2.02 2.02 0 0 0-1.3-.38c-.4 0-.74.1-1.01.3a.9.9 0 0 0-.4.74Zm9.08-3.75-3.32 7.8h-1.02l1.23-2.73-2.19-5.07h1.09l1.57 3.89h.02l1.54-3.89h1.08Z"
                    ></path>
                    <path
                      fill="#4285F4"
                      d="M15.14 13.1c0-.32-.03-.64-.09-.95h-4.17v1.75h2.4a2.1 2.1 0 0 1-.89 1.4v1.14h1.43a4.49 4.49 0 0 0 1.32-3.33Z"
                    ></path>
                    <path
                      fill="#34A853"
                      d="M12.4 15.3a2.66 2.66 0 0 1-4-1.44H6.9v1.18a4.43 4.43 0 0 0 6.91 1.4l-1.43-1.13Z"
                    ></path>
                    <path
                      fill="#FABB05"
                      d="M8.25 13c0-.3.05-.59.14-.86v-1.17H6.9a4.59 4.59 0 0 0 0 4.07l1.48-1.17a2.79 2.79 0 0 1-.14-.86Z"
                    ></path>
                    <path
                      fill="#E94235"
                      d="M10.88 10.27c.66 0 1.24.23 1.7.68l1.27-1.3a4.22 4.22 0 0 0-2.97-1.18 4.44 4.44 0 0 0-3.97 2.5l1.48 1.17a2.66 2.66 0 0 1 2.5-1.87Z"
                    ></path>
                  </svg>
                </span>
              </span>
              <span className="sc-208a6320-1 eUXNjo">
                <span className="sc-16f6a3a5-0 dQtUlY">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 26" className="w-[30px]">
                    <path fill="#fff" d="M0 0h40v26H0z"></path>
                    <path
                      fill="#1434CB"
                      d="m15.9 7.7-4.43 10.6h-2.9l-2.2-8.47c-.13-.52-.25-.71-.65-.93C5.05 8.55 3.96 8.2 3 8l.07-.32h4.67c.6 0 1.13.4 1.27 1.09l1.15 6.14 2.86-7.23h2.89Zm11.39 7.15c0-2.8-3.88-2.96-3.85-4.21 0-.38.37-.79 1.16-.9a5.2 5.2 0 0 1 2.71.48l.48-2.25a7.4 7.4 0 0 0-2.57-.47c-2.71 0-4.62 1.44-4.64 3.51-.02 1.53 1.36 2.38 2.4 2.9 1.08.51 1.44.85 1.43 1.31 0 .71-.85 1.03-1.64 1.04-1.39.02-2.19-.37-2.82-.67l-.5 2.33c.64.29 1.82.55 3.05.56 2.89 0 4.78-1.42 4.79-3.63Zm7.17 3.46H37L34.78 7.7h-2.34c-.53 0-.98.3-1.17.78l-4.12 9.84h2.88l.57-1.58h3.53l.33 1.58Zm-3.07-3.76 1.45-3.99.83 4H31.4ZM19.83 7.7l-2.27 10.62h-2.74L17.09 7.7h2.74Z"
                    ></path>
                  </svg>
                </span>
              </span>
              <span className="sc-208a6320-1 eUXNjo">
                <span className="sc-16f6a3a5-0 dQtUlY">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 26" className="w-[30px]">
                    <path fill="#fff" d="M0 0h40v26H0z"></path>
                    <path
                      fill="#7773B4"
                      d="M16.13 19.29h7.74V6.7h-7.74v12.58z"
                    ></path>
                    <path
                      fill="#EA1D25"
                      d="M16.93 13A7.93 7.93 0 0 1 20 6.71a8.02 8.02 0 0 0-10.65.65 7.96 7.96 0 0 0 0 11.28 8.02 8.02 0 0 0 10.65.65A8.02 8.02 0 0 1 16.93 13"
                    ></path>
                    <path
                      fill="#139FDA"
                      d="M33 13c0 2.12-.84 4.15-2.34 5.65a8.1 8.1 0 0 1-10.66.64A8.05 8.05 0 0 0 23.07 13 7.96 7.96 0 0 0 20 6.71a8.02 8.02 0 0 1 10.66.64A7.93 7.93 0 0 1 33 13"
                    ></path>
                  </svg>
                </span>
              </span>
            </span>
          </span>
        </div>
        <p className="w-[200px] mt-4">Not all payment methods are available in every country.</p>
      </div>
      <h3 className="text-right">© 2024 tonies GmbH</h3>
      <p className="mt-12 text-sm">The use of the Content for text and data mining of (generative) AI systems is expressly reserved in the context specified in clause 13.4 of the Terms of Use and is therefore prohibited.</p>
    </div>
  );
};

export default Footer;
