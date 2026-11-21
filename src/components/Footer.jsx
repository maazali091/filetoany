import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-gray-50 pt-20 pb-5 px-10 dark:bg-slate-900'>
        <div className='grid grid-cols-2 xl:grid-cols-4 gap-10'>
            <div className='flex flex-col col-span-2 xl:col-span-4 gap-3'>
                <div className="w-auto flex items-center gap-2 mb-3 group font-brand">
                            {/* Icon: Size thora compact (w-8 h-8) kiya hai aur shadow soft ki hai */}
                            <div className="flex items-center justify-center w-8 h-8 xl:w-10 xl:h-10.5 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-md shadow-indigo-500/30 group-hover:scale-105 transition-transform duration-200">
                              <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2.5" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                // SVG ko icon ke box ke hisaab se center kiya hai
                                className="w-4 h-4 xl:w-6 xl:h-6"
                              >
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                <path d="M14 2v6h6"/>
                                <path d="M8 13h6"/>
                                <path d="m12 10 3 3-3 3"/>
                              </svg>
                            </div>
                
                            {/* Text Container: relative lagaya hai taake .tools adjust ho sake */}
                            <div className="relative flex items-center text-[26px] xl:text-[33px] leading-none">
                              
                              {/* Main Text: font-extrabold kiya hai (font-black se halka) taake premium lage */}
                              <span className="font-extrabold tracking-tight text-slate-900 dark:text-white">
                                file<span className="text-indigo-600">to</span>any
                              </span>
                              
                              {/* .tools: 0.6em size, right-0 se exactly 'y' ke neechay set hua hai */}
                              <span className="absolute -bottom-5.5 right-0.5 text-[0.55em] font-bold text-slate-400 dark:text-slate-500 tracking-wide">
                                .tools
                              </span>
                              
                            </div>
                          </div>
                <span className='font-medium md:max-w-100 text-lg pr-10 text-gray-500 dark:text-gray-400 mt-2'>Fast, secure file conversion for everyone. No ads, no limits.</span>
            </div>
            <div className='flex flex-col gap-3'>
                <h2 className='font-bold text-xl'>Product</h2>
                <ul className='text-lg flex flex-col font-medium text-gray-500 dark:text-gray-400 gap-1.5'>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Security</li>
                    <li>API</li>
                </ul>
            </div>
            <div className='flex flex-col gap-3'>
                <h2 className='font-bold text-xl'>Company</h2>
                <ul className='text-lg flex flex-col font-medium text-gray-500 dark:text-gray-400 gap-1.5'>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Careers</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='flex flex-col gap-3'>
                <h2 className='font-bold text-xl'>Resources</h2>
                <ul className='text-lg flex flex-col font-medium text-gray-500 dark:text-gray-400 gap-1.5'>
                    <li>Documentation</li>
                    <li>Status</li>
                    <li>Support</li>
                    <li>Developers</li>
                </ul>
            </div>
            <div className='flex flex-col gap-3'>
                <h2 className='font-bold text-xl'>Legal</h2>
                <ul className='text-lg flex flex-col font-medium text-gray-500 dark:text-gray-400 gap-1.5'>
                    <li><Link to="/privacy">Privacy</Link></li>
                    <li><Link to="/terms">Terms</Link></li>
                    <li><Link to="/refund">Refund</Link></li>
                    <li>Security</li>
                </ul>
            </div>
        </div>
        <div className='mt-10 text-center flex gap-3 flex-col'>
            <hr className='bg-gray-400 mb-5 h-0.5 xl:mt-10 xl:mb-5 border-0' />
            <span className='text-sm xl:text-lg text-gray-500 dark:text-gray-400'>&copy; 2026 <span className="font-extrabold tracking-tight text-slate-900 dark:text-white">
                                file<span className="text-indigo-600">to</span>any
                              </span>. All rights reserved.</span>
            <div className='flex gap-3 font-medium xl:text-lg text-gray-600 dark:text-gray-400 justify-center'>
                <span>Twitter</span>
                <span>GitHub</span>
                <span>LinkedIn</span>
            </div>
        </div>
    </div>
  )
}

export default Footer