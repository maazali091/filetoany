import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie } from 'lucide-react';

function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // 1 second baad show karein taake page load ho jaye
      const timer = setTimeout(() => setShow(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 animate-slide-up">
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
        
        <div className="flex items-start gap-3 flex-1">
          <div className="shrink-0 h-10 w-10 rounded-full bg-indigo-100 dark:bg-indigo-950/40 flex items-center justify-center">
            <Cookie size={20} className="text-indigo-600 dark:text-indigo-400" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white text-sm md:text-base">
              We use cookies
            </h3>
            <p className="mt-1 text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              We use cookies to improve your experience and analyze traffic. 
              Read our{' '}
              <Link to="/privacy" className="text-indigo-600 dark:text-indigo-400 underline">
                Privacy Policy
              </Link>{' '}
              for details.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto">
          <button
            onClick={handleDecline}
            className="flex-1 md:flex-none px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 md:flex-none px-5 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieBanner;