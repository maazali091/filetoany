// import { ChevronDown, ChevronLeftCircleIcon, ChevronUp } from 'lucide-react'
// import React, { useState } from 'react'
// import { faqs } from '../assets/faqs';
// function Faqs() {
//   const [openIndex, setOpenIndex] = useState(null);
//   const toggleFaq = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };
//   return (
//     <div className='pt-30 pb-10 xl:pb-20  px-5 md:px-20 lg:px-30 dark:bg-slate-900' id='faq'>
//       <div className='text-center'>
//         <h2 className='text-[47px]/15 mb-3 font-bold'>Frequently Asked Questions</h2>
//         <span className='font-medium text-[20px] xl:text-[23px] dark:text-gray-400 text-slate-600'>Everything you need to know</span>
//       </div>
//       <div className="mt-15 flex flex-col gap-5 max-w-230 mx-auto">
//         {faqs.map((faq, index) => {
//           const isOpen = openIndex === index;
//           return (
//             <div key={index} onClick={() => toggleFaq(index)} className={`border-2 border-gray-300 dark:border-slate-700 p-5 rounded-2xl cursor-pointer transition-all duration-300 ${isOpen ? 'bg-white dark:bg-slate-800 shadow-sm' : 'bg-transparent'}`}>
//               <div className='flex justify-between items-center '>
//                 <h3 className={`font-bold text-md xl:text-lg ${isOpen ? "text-blue-600" : "text-gray-900 dark:text-gray-200"}`}>
//                   {faq.question}
//                 </h3>
//                 {isOpen ? <ChevronUp className='text-blue-600 w-5 h-5 shrink-0' /> : <ChevronDown className='text-blue-600 w-5 h-5 shrink-0' />}
//               </div>
//               {isOpen && <p className='mt-3 font-medium xl:text-lg text-gray-700 dark:text-gray-400 animate-fade-in'>All files are encrypted with AES-256. Files are automatically deleted after 24 hours. We never store or log your data.</p>}
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }
// export default Faqs




import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';
import { faqs } from '../assets/faqs';

function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='pt-20 pb-16 xl:pt-28 xl:pb-24 px-5 md:px-20 lg:px-30 dark:bg-slate-900' id='faq'>
      {/* HEADER */}
      <div className='text-center max-w-3xl mx-auto'>
        <div className='inline-flex items-center gap-2 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 px-3.5 py-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-4'>
          FAQ
        </div>
        <h2 className='text-3xl xl:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-3'>
          Frequently Asked Questions
        </h2>
        <p className='text-base xl:text-lg text-slate-500 dark:text-slate-400'>
          Everything you need to know about <span className="font-extrabold tracking-tight text-slate-900 dark:text-white">
                                file<span className="text-indigo-600">to</span>any
                              </span>
        </p>
      </div>

      {/* FAQ LIST */}
      <div className="mt-12 flex flex-col gap-3 max-w-3xl mx-auto">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.id}
              onClick={() => toggleFaq(index)}
              className={`border rounded-2xl cursor-pointer transition-all duration-300 ${
                isOpen
                  ? 'border-blue-300 dark:border-blue-500/50 bg-blue-50/50 dark:bg-blue-500/5 shadow-sm'
                  : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600'
              }`}
            >
              <div className='flex justify-between items-center gap-4 p-5 xl:p-6'>
                <h3 className={`font-semibold text-base xl:text-lg transition-colors ${
                  isOpen
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-slate-900 dark:text-slate-100'
                }`}>
                  {faq.question}
                </h3>
                <div className={`shrink-0 flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 ${
                  isOpen
                    ? 'bg-blue-600 text-white rotate-180'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
                }`}>
                  <ChevronDown className='w-4 h-4' />
                </div>
              </div>

              {isOpen && (
                <div className='px-5 xl:px-6 pb-5 xl:pb-6 -mt-1'>
                  <p className='text-sm xl:text-base text-slate-600 dark:text-slate-400 leading-relaxed'>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Faqs;