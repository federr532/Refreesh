"use client"

import React, { useState } from "react";
import { TECollapse } from "tw-elements-react";



export default function Question({collapseNum, title, content}: {collapseNum : string, title : string, content : string}) : JSX.Element {

    const [show, setShow] = useState({
        [collapseNum]: false,
      });

      const toggleShow = (value: object) => {
        setShow({ ...show, ...value });
      };
    
  return (
    <div id="accordionExample">
        <div className="border-slate-900 border md:mb-4">
          <h2 className="mb-0 " id="headingOne">
            <button
              className={`${
                show.collapseNum &&
                `text-primary`
              } group relative hover:text-blue-400 flex w-full items-center bg-white px-8 py-7 text-left text-base ${show[collapseNum] ? 'text-blue-500' : 'text-neutral-800'} transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() =>
                toggleShow({ ...show, [collapseNum]: !show[collapseNum] })
              }
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              {title}
              <span
                className={`${
                  show[collapseNum]
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-0 fill-[#212529]  dark:fill-white`
                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <TECollapse
            show={show[collapseNum]}
            className="!mt-0 !rounded-b-none !shadow-none"
          >
            <div className="px-5 py-4 ">
              {content}
            </div>
          </TECollapse>
        </div>
      </div>
  )
}
