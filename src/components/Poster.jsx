// import React from 'react'

// function Poster() {
//   return (
//     <div className='px-15 py-25 bg-violet-600 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 justify-center items-center gap-10 text-center flex-col'>
//       <div className='hover:scale-105 transition-all duration-200'>
//         <h2 className='text-white text-5xl mb-2 font-bold'>500K+</h2>
//         <span className='text-gray-100 font-medium text-lg'>Files Converted</span>
//       </div>
//       <div className='hover:scale-105 transition-all duration-200'>
//         <h2 className='text-white text-5xl mb-2 font-bold'>99.9%</h2>
//         <span className='text-gray-100 font-medium text-lg'>Success Rate</span>
//       </div>
//       <div className='hover:scale-105 transition-all duration-200'>
//         <h2 className='text-white text-5xl mb-2 font-bold'>190+</h2>
//         <span className='text-gray-100 font-medium text-lg'>Countries</span>
//       </div>
//       <div className='hover:scale-105 transition-all duration-200'>
//         <h2 className='text-white text-5xl mb-2 font-bold'>24/7</h2>
//         <span className='text-gray-100 font-medium text-lg'>Support</span>
//       </div>
//     </div>
//   )
// }

// export default Poster



import React from 'react';
import { FileCheck, Shield, Globe, Headphones } from 'lucide-react';

function Poster() {
  const stats = [
    {
      icon: FileCheck,
      value: '500K+',
      label: 'Files Converted',
    },
    {
      icon: Shield,
      value: '99.9%',
      label: 'Success Rate',
    },
    {
      icon: Globe,
      value: '190+',
      label: 'Countries',
    },
    {
      icon: Headphones,
      value: '24/7',
      label: 'Support',
    },
  ];

  return (
    <div className='px-5 md:px-10 lg:px-15 py-16 xl:py-20 bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-700 relative overflow-hidden'>
      {/* Decorative blobs */}
      <div className='absolute -top-32 -right-32 h-72 w-72 rounded-full bg-white/5 blur-3xl' />
      <div className='absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-white/5 blur-3xl' />

      <div className='relative max-w-6xl mx-auto'>
        {/* HEADER */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl xl:text-4xl font-bold text-white mb-3 tracking-tight'>
            Trusted by users worldwide
          </h2>
          <p className='text-indigo-200 text-base xl:text-lg'>
            Real numbers from our growing community
          </p>
        </div>

        {/* STATS GRID */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6'>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className='group flex flex-col items-center text-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 p-6 xl:p-8 transition-all duration-300 hover:bg-white/15 hover:scale-105'
              >
                <div className='mb-4 flex h-12 w-12 xl:h-14 xl:w-14 items-center justify-center rounded-2xl bg-white/15 text-white transition-transform group-hover:scale-110'>
                  <Icon size={24} />
                </div>
                <h3 className='text-3xl xl:text-4xl font-bold text-white mb-1'>
                  {stat.value}
                </h3>
                <span className='text-xs xl:text-sm font-medium text-indigo-200'>
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Poster;