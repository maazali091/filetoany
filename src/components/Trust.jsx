import React from 'react';

function Trust() {
  const brands = [
    { name: 'Google', color: '#4285F4' },
    { name: 'Microsoft', color: '#00A4EF' },
    { name: 'Slack', color: '#9A154B' },
    { name: 'Spotify', color: '#1DB954' },
    { name: 'Stripe', color: '#635BFF' },
    { name: 'Notion', color: '#096021' },
    { name: 'Figma', color: '#F24E1E' },
    { name: 'Dropbox', color: '#0061FF' },
  ];

  return (
    <div className='pt-20 pb-20 border-t border-gray-200 dark:border-gray-800 px-5 dark:bg-slate-900'>
      <div className='text-center'>
        <span className='uppercase text-gray-400 text-sm xl:text-base tracking-widest font-bold'>
          Trusted by Millions
        </span>
        <h2 className='font-bold text-3xl xl:text-4xl mt-3 dark:text-white text-slate-900'>
          500,000+ Users Worldwide
        </h2>
      </div>

      {/* BRAND GRID */}
      <div className='mt-12 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-6'>
        {brands.map((brand, index) => (
          <div
            key={index}
            className='flex items-center justify-center rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 py-6 xl:py-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-slate-300 dark:hover:border-slate-600'
          >
            <span
              className='font-bold text-xl xl:text-2xl tracking-tight'
              style={{ color: brand.color }}
            >
              {brand.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trust;