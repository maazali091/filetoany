// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Formats } from '../assets/Formats'

// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Autoplay, Pagination } from 'swiper/modules';
// function SuppFormats() {
//   return (
//     <div className='pt-20 pb-10 px-5 lg:px-15 xl:pt-20 xl:pb-30 bg-gray-50 dark:bg-slate-900'>
//         <div className='text-center px-5'>
//             <h2 className='text-[52px]/15 mb-3 font-bold'>Supported Formats</h2>
//             <span className='font-medium text-[20px] text-slate-600'>Convert between 50+ file types</span>
//         </div>
//         <Swiper  modules={[Autoplay, Pagination]} spaceBetween={30}  slidesPerView={3} 
//              loop='3' autoplay={{ delay: 1000, disableOnInteraction: false, }}
//               breakpoints={{
//                 320: { slidesPerView: 2 },
//                 768: { slidesPerView: 3 },
//                 1024: { slidesPerView: 5 },
//                 1200: {slidesPerView: 6},
//             }} className="mySwiper grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-6 gap-5 mt-15">
//                 {Formats.map((i) => (
//                     <SwiperSlide key={i.id}>
//                         <div  className='border a-full flex bg-white dark:bg-slate-800 dark:border-slate-500 justify-center items-center border-slate-300 hover:shadow-lg transition-all duration-200 group rounded-lg px-5 py-8 flex-col gap-5 cursor-pointer'>
//                             <i.icon className='dark:text-slate-400 xl:size-12' size={40}/>
//                             <h3 className='font-medium text-gray-600 dark:text-gray-300'>{i.name}</h3>
//                         </div>
//                     </SwiperSlide>  
//                 ))}
//             </Swiper>
//     </div>
//   )
// }

// export default SuppFormats




import React from 'react';
import { Formats } from '../assets/Formats';

function SuppFormats() {
  return (
    <div className='pt-20 pb-16 px-5 lg:px-15 xl:pt-24 xl:pb-20 bg-gray-50 dark:bg-slate-900'>
      <div className='text-center px-5'>
        <h2 className='text-3xl xl:text-4xl font-bold mb-3 dark:text-white text-slate-900'>
          Supported Formats
        </h2>
        <span className='text-base xl:text-lg text-slate-500 dark:text-slate-400'>
          Convert between 50+ file types
        </span>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 xl:gap-4 mt-10 max-w-6xl mx-auto'>
        {Formats.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className='flex flex-col items-center justify-center gap-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 py-6 px-4 transition-colors hover:border-slate-300 dark:hover:border-slate-600'
            >
              <Icon className='text-slate-500 dark:text-slate-400' size={32} />
              <h3 className='text-sm font-medium text-slate-700 dark:text-slate-300'>
                {item.name}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SuppFormats;