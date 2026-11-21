

// import { ArrowRight, Upload, Shield, Zap, Sparkles } from 'lucide-react';
// import React from 'react';
// import { Link } from 'react-router-dom';

// function JoinConvertly({ isPro }) {
//   return (
//     <div className='relative px-5 md:px-10 lg:px-15 py-16 xl:py-24 bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-600 overflow-hidden'>
//       {/* Decorative blobs */}
//       <div className='absolute -top-32 -right-32 h-72 w-72 rounded-full bg-white/10 blur-3xl' />
//       <div className='absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-white/10 blur-3xl' />

//       <div className='relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 xl:gap-16 items-center'>

//         {/* LEFT: Text Content */}
//         <div className='lg:col-span-3 text-center lg:text-left'>
//           <div className='inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 px-4 py-1.5 text-xs font-semibold text-white mb-5'>
//             <Sparkles size={13} />
//             Get Started Free
//           </div>

//           <h2 className='text-4xl/12 md:text-5xl/14 xl:text-6xl/18 font-bold text-white mb-5 tracking-tight'>
//             Ready to convert your files?
//           </h2>

//           <p className='text-base xl:text-lg text-indigo-100 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0'>
//             Join thousands of users converting files every day. Free to start, no credit card required. Upgrade anytime.
//           </p>

//           {/* Feature pills */}
//           <div className='flex flex-wrap justify-center lg:justify-start gap-2 mb-8'>
//             <span className='inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 px-3 py-1.5 text-xs font-medium text-white'>
//               <Shield size={13} className='text-emerald-300' />
//               Secure
//             </span>
//             <span className='inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 px-3 py-1.5 text-xs font-medium text-white'>
//               <Zap size={13} className='text-amber-300' />
//               Lightning Fast
//             </span>
//             <span className='inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 px-3 py-1.5 text-xs font-medium text-white'>
//               <Sparkles size={13} className='text-cyan-300' />
//               10+ Tools
//             </span>
//           </div>
//         </div>

//         {/* RIGHT: CTA Buttons */}
//         <div className='lg:col-span-2 flex flex-col gap-3 w-full max-w-md mx-auto lg:mx-0'>
//           <Link
//             to='/sign-up'
//             className='group flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 xl:py-5 font-bold text-base xl:text-lg text-indigo-700 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5'
//           >
//             <Upload size={20} />
//             Start Converting Now
//             <ArrowRight size={20} className='transition-transform group-hover:translate-x-1' />
//           </Link>

//           <Link
//             to='/pricing'
//             className='flex items-center justify-center gap-2 rounded-2xl border-2 border-white/30 bg-white/5 backdrop-blur-sm px-6 py-4 font-semibold text-base text-white transition-all duration-300 hover:bg-white/10'
//           >
//             View Pricing
//           </Link>

//           <p className='text-center text-xs text-indigo-200 mt-2'>
//             Free plan includes 5 conversions per day
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default JoinConvertly;






import { ArrowRight, Upload, Shield, Zap, Sparkles, Crown, Settings } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

function JoinConvertly({ isPro }) {
  return (
    <div className='relative px-5 md:px-10 lg:px-15 py-16 xl:py-24 bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-600 overflow-hidden'>
      {/* Decorative blobs */}
      <div className='absolute -top-32 -right-32 h-72 w-72 rounded-full bg-white/10 blur-3xl' />
      <div className='absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-white/10 blur-3xl' />

      <div className='relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 xl:gap-16 items-center'>

        {/* LEFT: Text Content */}
        <div className='lg:col-span-3 text-center lg:text-left'>
          <div className='inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 px-4 py-1.5 text-xs font-semibold text-white mb-5'>
            {isPro ? (
              <>
                <Crown size={13} className='text-amber-300' />
                Pro Member
              </>
            ) : (
              <>
                <Sparkles size={13} />
                Get Started Free
              </>
            )}
          </div>

          <h2 className='text-4xl/12 md:text-5xl/14 xl:text-6xl/18 font-bold text-white mb-5 tracking-tight'>
            {isPro
              ? "You're all set, Pro!"
              : "Ready to convert your files?"}
          </h2>

          <p className='text-base xl:text-lg text-indigo-100 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0'>
            {isPro
              ? "Enjoy unlimited conversions, batch processing, and priority support. Thank you for being a Pro member!"
              : "Join thousands of users converting files every day. Free to start, no credit card required. Upgrade anytime."}
          </p>

          {/* Feature pills */}
          <div className='flex flex-wrap justify-center lg:justify-start gap-2 mb-8'>
            <span className='inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 px-3 py-1.5 text-xs font-medium text-white'>
              <Shield size={13} className='text-emerald-300' />
              Secure
            </span>
            <span className='inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 px-3 py-1.5 text-xs font-medium text-white'>
              <Zap size={13} className='text-amber-300' />
              Lightning Fast
            </span>
            <span className='inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 px-3 py-1.5 text-xs font-medium text-white'>
              <Sparkles size={13} className='text-cyan-300' />
              10+ Tools
            </span>
          </div>
        </div>

        {/* RIGHT: CTA Buttons */}
        <div className='lg:col-span-2 flex flex-col gap-3 w-full max-w-md mx-auto lg:mx-0'>
          {/* Main CTA */}
          <Link
            to={isPro ? '/dashboard' : '/sign-up'}
            className='group flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 xl:py-5 font-bold text-base xl:text-lg text-indigo-700 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5'
          >
            {isPro ? (
              <>
                <Crown size={20} />
                Go to Dashboard
              </>
            ) : (
              <>
                <Upload size={20} />
                Start Converting Now
              </>
            )}
            <ArrowRight size={20} className='transition-transform group-hover:translate-x-1' />
          </Link>

          {/* Secondary Button - Free vs Pro */}
          {isPro ? (
            <Link
              to='/dashboard'
              className='flex items-center justify-center gap-2 rounded-2xl border-2 border-white/30 bg-white/5 backdrop-blur-sm px-6 py-4 font-semibold text-base text-white transition-all duration-300 hover:bg-white/10'
            >
              <Settings size={18} />
              Manage Subscription
            </Link>
          ) : (
            <Link
              to='/pricing'
              className='flex items-center justify-center gap-2 rounded-2xl border-2 border-white/30 bg-white/5 backdrop-blur-sm px-6 py-4 font-semibold text-base text-white transition-all duration-300 hover:bg-white/10'
            >
              View Pricing
            </Link>
          )}

          {/* Footer text */}
          <p className='text-center text-xs text-indigo-200 mt-2'>
            {isPro
              ? "Unlimited access to all Pro features"
              : "Free plan includes 5 conversions per day"}
          </p>
        </div>

      </div>
    </div>
  );
}

export default JoinConvertly;