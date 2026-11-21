// import { Star, StarHalf } from 'lucide-react'
// import React from 'react'

// function Reviews() {
//   return (
//     <div className='pt-20 pb-10 mt-10 px-5 md:px-10 lg:px-15 dark:text-slate-900'>
//         <div className='text-center px-5'>
//             <h2 className='text-[45px]/15 mb-3 font-bold dark:text-white'>Loved by Teams</h2>
//             <span className='font-medium text-[20px] text-slate-600 dark:text-gray-400'>Join thousands of satisfied customers</span>
//         </div>
//         <div className='mt-10 grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-10 '>
//             <div className='border rounded-lg hover:scale-105 lg:hover:scale-103 dark:border-slate-500 dark:bg-slate-800 xl:px-8 xl:py-9 hover:shadow-lg transition-all duration-200 px-6 py-7 flex flex-col gap-6'>
//                 <span className='flex gap-1 text-yellow-400'><Star /> <Star /> <Star /> <Star /> <Star /></span>
//                 <p className='text-[17px] xl:text-2xl dark:text-gray-400 xl:py-2 text-gray-600 font-medium'>"Convertly saved our team hours every week. Unmatched speed and reliability."</p>
//                 <hr className='bg-gray-900 my-2 dark:bg-gray-100 xl:my-5' />
//                 <div className='flex gap-5 items-center'>
//                     <span className='w-13 h-13 flex font-bold text-xl text-white justify-center items-center rounded-full bg-violet-600'>SC</span>
//                     <div>
//                         <h3 className='font-bold text-lg dark:text-white'>Sarah Chen</h3>
//                         <span className='text-md font-medium text-gray-500 dark:text-gray-400'>Product Manager at Acme Inc</span>
//                     </div>
//                 </div>
//             </div>

//             <div className='border rounded-lg hover:scale-105 lg:hover:scale-103 dark:border-slate-500 dark:bg-slate-800 xl:px-8 xl:py-9 hover:shadow-lg transition-all duration-200  px-6 py-7 flex flex-col gap-6'>
//                 <span className='flex gap-1 text-yellow-400'><Star /> <Star /> <Star /> <Star /> <StarHalf /></span>
//                 <p className='text-[17px] xl:text-2xl xl:py-2 dark:text-gray-400 text-gray-600 font-medium'>"The cleanest interface I've seen. Zero learning curve, instantly productive."</p>
//                 <hr className='bg-gray-900 my-2 dark:bg-gray-100 xl:my-5' />
//                 <div className='flex gap-5 items-center'>
//                     <span className='w-13 h-13 flex font-bold text-xl text-white justify-center items-center rounded-full bg-violet-600'>JM</span>
//                     <div>
//                         <h3 className='font-bold text-lg dark:text-white'>James Mitchell</h3>
//                         <span className='text-md font-medium text-gray-500 dark:text-gray-400'>Freelance Designer at Independent</span>
//                     </div>
//                 </div>
//             </div>

//             <div className='border rounded-lg hover:scale-105 lg:hover:scale-103 dark:border-slate-500 dark:bg-slate-800 xl:px-8 xl:py-9 hover:shadow-lg transition-all duration-200  px-6 py-7 flex flex-col gap-6'>
//                 <span className='flex gap-1 text-yellow-400'><Star /> <Star /> <Star /> <Star /> <Star /></span>
//                 <p className='text-[17px] xl:text-2xl xl:py-2 dark:text-gray-400 text-gray-600 font-medium'>"Batch processing is a game-changer. We process hundreds of files daily now."</p>
//                 <hr className='bg-gray-900 my-2 dark:bg-gray-100 xl:my-5' />
//                 <div className='flex gap-5 items-center'>
//                     <span className='w-13 h-13 flex font-bold text-xl text-white justify-center items-center rounded-full bg-violet-600'>LR</span>
//                     <div>
//                         <h3 className='font-bold text-lg dark:text-white'>Lisa Rodriguez</h3>
//                         <span className='text-md font-medium text-gray-500 dark:text-gray-400'>Operations Director at Global Tech</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Reviews




import React from 'react';
import { Shield, Zap, Users, Globe, Lock, Sparkles } from 'lucide-react';

function Reviews() {
  const stats = [
    {
      icon: Users,
      value: '500K+',
      label: 'Files Converted',
      color: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-50 dark:bg-blue-500/10',
    },
    {
      icon: Shield,
      value: '100%',
      label: 'Secure & Private',
      color: 'text-emerald-600 dark:text-emerald-400',
      bg: 'bg-emerald-50 dark:bg-emerald-500/10',
    },
    {
      icon: Zap,
      value: '99.9%',
      label: 'Success Rate',
      color: 'text-amber-600 dark:text-amber-400',
      bg: 'bg-amber-50 dark:bg-amber-500/10',
    },
    {
      icon: Globe,
      value: '190+',
      label: 'Countries',
      color: 'text-violet-600 dark:text-violet-400',
      bg: 'bg-violet-50 dark:bg-violet-500/10',
    },
    {
      icon: Lock,
      value: 'Zero',
      label: 'Data Logging',
      color: 'text-rose-600 dark:text-rose-400',
      bg: 'bg-rose-50 dark:bg-rose-500/10',
    },
    {
      icon: Sparkles,
      value: '10+',
      label: 'Tools Available',
      color: 'text-cyan-600 dark:text-cyan-400',
      bg: 'bg-cyan-50 dark:bg-cyan-500/10',
    },
  ];

  return (
    <div className='pt-16 pb-14 xl:pt-20 xl:pb-20 px-5 md:px-10 xl:px-20 dark:bg-slate-900'>
      {/* HEADER */}
      <div className='text-center max-w-3xl mx-auto'>
        <div className='inline-flex items-center gap-2 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 px-3.5 py-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-4'>
          <Shield size={13} />
          Trusted Worldwide
        </div>

        <h2 className='text-3xl xl:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-3'>
          Built for Speed. Trusted for Security.
        </h2>

        <p className='text-base xl:text-lg text-slate-500 dark:text-slate-400'>
          Millions of files converted safely every month
        </p>
      </div>

      {/* STATS GRID */}
      <div className='mt-10 xl:mt-12 grid grid-cols-2 lg:grid-cols-3 gap-3 xl:gap-4'>
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className='group flex items-center gap-3 xl:gap-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 xl:p-5 transition-all duration-300 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-600'
            >
              <div className={`flex h-11 w-11 xl:h-12 xl:w-12 shrink-0 items-center justify-center rounded-xl ${stat.bg} ${stat.color} transition-transform group-hover:scale-110`}>
                <Icon size={20} />
              </div>
              <div className='min-w-0'>
                <h3 className={`text-xl xl:text-2xl font-bold ${stat.color} leading-tight`}>
                  {stat.value}
                </h3>
                <p className='text-xs xl:text-sm font-medium text-slate-500 dark:text-slate-400 truncate'>
                  {stat.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* BOTTOM FEATURE PILLS */}
      <div className='mt-10 xl:mt-12 flex flex-wrap items-center justify-center gap-3'>
        <span className='inline-flex items-center gap-2 rounded-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 px-4 py-2 text-xs xl:text-sm font-medium text-slate-600 dark:text-slate-300'>
          <Shield size={14} className='text-emerald-500' />
          Files never leave your device
        </span>
        <span className='inline-flex items-center gap-2 rounded-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 px-4 py-2 text-xs xl:text-sm font-medium text-slate-600 dark:text-slate-300'>
          <Zap size={14} className='text-amber-500' />
          100% browser-based
        </span>
        <span className='inline-flex items-center gap-2 rounded-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 px-4 py-2 text-xs xl:text-sm font-medium text-slate-600 dark:text-slate-300'>
          <Sparkles size={14} className='text-blue-500' />
          Free to start
        </span>
      </div>
    </div>
  );
}

export default Reviews;