
import React, { useState } from "react";



export default function QuestionComponent({collapseNum = "", title = "", content = ""}: {collapseNum : string, title : string, content : string}) : JSX.Element {

    const [show, setShow] = useState({
        [collapseNum]: false,
      });

      const toggleShow = (value: object) => {
        setShow({ ...show, ...value });
        console.log(show);
      };
    
  return (
    <div id="accordion-flush" className="bg-white text-gray-900 dark:text-white">
  <h2 id="accordion-flush-heading-1">
    <button 
    onClick={() =>
      toggleShow({
        [collapseNum]: !show[collapseNum],
      })
    }
     type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
      <span className={`${show[collapseNum] ? "text-blue-600" : "text-slate-800"}`}>{title}</span>
      <svg className={`w-3 h-3 ${show[collapseNum] ? 'rotate-180' : 'rotate-0'} duration-150 shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-flush-body-1" className={`${show[collapseNum] ? "block" : "hidden"}`} aria-labelledby="accordion-flush-heading-1">
    <div className="py-5 border-b border-gray-200 dark:border-gray-700">
      <p className="mb-2 text-gray-600">{content}</p>
      
    </div>
  </div>
  
</div>
  )
}
