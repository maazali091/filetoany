

import React from 'react';
import { WhyusData } from '../assets/WhyusData';

function Whyus() {
  return (
    <div className='pt-20 pb-16 px-5 lg:px-15 xl:pt-24 xl:pb-20 dark:bg-slate-900'>
      <div className='text-center px-5'>
        <h2 className='text-3xl xl:text-4xl font-bold mb-3 dark:text-white text-slate-900'>
          Why Choose <span className="font-extrabold xl:5xl tracking-tight text-slate-900 dark:text-white">
                                file<span className="text-indigo-600">to</span>any
                              </span>
        </h2>
        <span className='text-base xl:text-lg text-slate-500 dark:text-slate-400'>
          Built for speed, security and simplicity
        </span>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6 mt-10 max-w-6xl mx-auto'>
        {WhyusData.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className='rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 transition-colors hover:border-slate-300 dark:hover:border-slate-600'
            >
              <div className='flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 mb-4'>
                <Icon size={22} />
              </div>
              <h3 className='text-lg xl:text-xl font-bold text-slate-900 dark:text-white mb-2'>
                {item.name}
              </h3>
              <p className='text-sm xl:text-base text-slate-500 dark:text-slate-400 leading-relaxed'>
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Whyus;