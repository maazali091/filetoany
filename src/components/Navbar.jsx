import { Menu, Moon, Sun, X, LogOut, ChevronDown, Crown } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ isDark, setIsDark, user, onLogout, authLoading, isPro }) {
  const [sidebar, setSidebar] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  // THEME
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  // CLOSE MOBILE MENU
  const closeSidebar = () => {
    setSidebar(false);
  };

  // LOGOUT
  const handleLogout = async () => {
    setAccountOpen(false);
    setSidebar(false);
    if (onLogout) {
      await onLogout();
    }
  };

  // USER DATA
  const userEmail = user?.email || "";
  const userName =
    user?.user_metadata?.full_name ||
    user?.email?.split("@")[0] ||
    "Account";
  const avatarLetter = userName?.charAt(0)?.toUpperCase() || "U";

  return (
    <header className="relative z-50 w-full">
      <div className="flex h-20 w-full items-center justify-between bg-slate-100 px-5 font-medium dark:bg-slate-900 md:pl-10 md:pr-0 lg:px-15 xl:h-26">
        {/* LOGO */}
          <Link
            to="/"
            onClick={() => { closeSidebar(); setAccountOpen(false); }}
            // gap-2.5 se spacing tight ki hai taake sab kuch ek block lage
            className="shrink-0 flex items-center gap-2 group font-brand"
          >
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
          </Link>
        {/* DESKTOP / MOBILE NAVIGATION */}
        <div
          className={`absolute left-0 top-20 w-full md:shadow-none md:max-w-120 bg-slate-100 md:bg-gray-900 px-5 pb-6 transition-all duration-300 ease-in-out dark:bg-slate-900 md:relative md:left-0 md:top-0 md:flex md:justify-between  md:bg-transparent md:w-auto md:flex-1 md:items-center md:justify-between  md:px-0 md:pb-0 md:pl-10 xl:pl-0
            ${
              sidebar
                ? "max-h-[700px] opacity-100 shadow-lg overflow-visible"
                : "max-h-0 opacity-0 overflow-hidden md:max-h-full md:opacity-100 md:overflow-visible "
            }`}
        >
          {/* NAV LINKS */}
          <ul className="flex flex-col gap-4 border-t border-slate-300 pt-5 text-slate-700 dark:text-gray-300 md:flex-row md:items-center md:gap-5 md:border-0 xl:pr-50 md:pt-0 xl:gap-7">
            <li className="text-2xl md:text-[16px] hover:text-indigo-600 dark:hover:text-white md:text-base xl:text-xl">
              <a href="#tools" onClick={closeSidebar}>
                Tools
              </a>
            </li>

            {/* Pricing link — sirf Free users ko dikhega */}
            {!isPro && (
              <li className="text-2xl md:text-[16px] hover:text-indigo-600 dark:hover:text-white md:text-base xl:text-xl">
                <Link to="/pricing" onClick={closeSidebar}>
                  Pricing
                </Link>
              </li>
            )}

            <li className="text-2xl md:text-[16px]  hover:text-indigo-600 dark:hover:text-white md:text-base xl:text-xl">
              <a href="#features" onClick={closeSidebar}>
                Features
              </a>
            </li>
            <li className="text-2xl md:text-[16px] hover:text-indigo-600 dark:hover:text-white md:text-base xl:text-xl">
              <a href="#faq" onClick={closeSidebar}>
                FAQ
              </a>
            </li>
          </ul>

          {/* AUTH SECTION */}
          <div className="mt-6 flex flex-col items-start md:gap-3 gap-3 md:mt-0 md:flex-row md:items-center md:ml-auto md:mr-6 lg:mr-10 whitespace-nowrap">
            {!authLoading && !user && (
              <>
                <Link
                  to="/log-in"
                  onClick={closeSidebar}
                  className="rounded-lg px-4 py-2 text-base text-slate-900 transition hover:bg-slate-200 dark:text-gray-300 dark:hover:bg-slate-800 xl:text-lg"
                >
                  Log In
                </Link>
                <Link
                  to="/sign-up"
                  onClick={closeSidebar}
                  className="rounded-lg bg-indigo-600 px-5 py-2.5 text-base text-white transition hover:bg-indigo-700 xl:text-lg whitespace-nowrap shadow-sm shadow-indigo-600/20"
                >
                  Sign Up
                </Link>
              </>
            )}

            {/* LOGGED IN */}
            {!authLoading && user && (
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setAccountOpen((prev) => !prev)}
                  className="flex items-center gap-2 md:gap-1.5 rounded-xl border border-slate-300 bg-white px-3 py-2 md:px-2 md:py-1.5 text-slate-700 shadow-sm transition hover:border-indigo-400 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                >
                  <span className="flex h-8 w-8 md:w-7 md:h-7 items-center justify-center rounded-lg bg-indigo-600 text-sm font-semibold text-white">
                    {avatarLetter}
                  </span>
                  <span className="max-w-[150px] truncate text-sm font-medium">
                    {userName}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      accountOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                {accountOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setAccountOpen(false)} />
                    <div className="absolute left-0 md:left-auto md:right-0 top-[calc(100%+10px)] z-50 w-72 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-800">
                      <div className="border-b border-slate-200 px-4 py-4 dark:border-slate-700">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-600 font-semibold text-white">
                            {avatarLetter}
                          </div>
                          <div className="min-w-0">
                            <p className="truncate font-semibold text-slate-900 dark:text-white">
                              {userName}
                            </p>
                            <p className="mt-1 truncate text-xs text-slate-500 dark:text-slate-400">
                              {userEmail}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="px-2 py-2">
                        <div className="mb-1 flex items-center justify-between rounded-lg px-3 py-2 text-sm text-slate-600 dark:text-slate-300">
                          <span>Plan</span>
                          <span
                            className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                              isPro
                                ? "bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400"
                                : "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400"
                            }`}
                          >
                            {isPro ? "Pro" : "Free"}
                          </span>
                        </div>

                        <Link
                          to="/dashboard"
                          onClick={() => setAccountOpen(false)}
                          className="mb-1 flex items-center justify-between rounded-lg px-3 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50"
                        >
                          Dashboard
                        </Link>

                        <button
                          type="button"
                          onClick={handleLogout}
                          className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-red-600 transition hover:bg-red-50 dark:hover:bg-red-950/30"
                        >
                          <LogOut size={17} />
                          Log out
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="ml-4 md:ml-7 flex shrink-0 items-center gap-3">
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={() => setIsDark(!isDark)}
            className="flex h-10 w-10 md:h-8 md:w-8 shrink-0  md:relative md:-left-7 items-center justify-center rounded-full bg-slate-400 text-slate-100 transition hover:bg-slate-500 active:scale-95"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            aria-label="Toggle navigation"
            className="text-slate-900 dark:text-slate-100 md:hidden"
            onClick={() => setSidebar((prev) => !prev)}
          >
            {sidebar ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
