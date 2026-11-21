import { Crown, Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const UpgradeButton = ({ className = '' }) => {
  const [user, setUser] = useState(null);
  const [isPro, setIsPro] = useState(false);
  const [loading, setLoading] = useState(true);
  const [redirecting, setRedirecting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);

      // ✅ Check karein ke user already Pro hai ya nahi
      if (user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('plan')
          .eq('id', user.id)
          .maybeSingle();

        setIsPro(profile?.plan === 'pro');
      }
      setLoading(false);
    };
    getUser();
  }, []);

  const handleUpgrade = () => {
    // Agar user login nahi hai, toh login page par bhejein
    if (!user) {
      navigate('/log-in');
      return;
    }

    // ✅ Agar user already Pro hai, toh checkout par mat bhejein
    if (isPro) {
      navigate('/dashboard');
      return;
    }

    setRedirecting(true);

    // ✅ LIVE (real) - jab Live Mode mein jaana ho, toh yeh use karein
    // const checkoutUrl = `https://convertly-tools.lemonsqueezy.com/checkout/buy/9fef6484-04b6-438a-8508-59e65767e8ef?checkout[custom][user_id]=${user.id}&checkout[email]=${user.email}`;

    // ✅ TEST - ab user_id aur email attach kiye hue hain
    const checkoutUrl = `https://convertly-tools.lemonsqueezy.com/checkout/buy/a0160b45-ffc8-4177-8d8d-b10b8f0aeb9a?checkout[custom][user_id]=${user.id}&checkout[email]=${user.email}`;

    window.location.href = checkoutUrl;
  };

  // Loading state
  if (loading) {
    return (
      <button
        disabled
        className={`flex items-center justify-center gap-2 rounded-xl bg-gray-400 px-5 py-3 font-semibold text-white ${className}`}
      >
        <Loader2 size={18} className="animate-spin" />
        Loading...
      </button>
    );
  }

  // ✅ Agar user already Pro hai, toh "You're Pro" ka button dikhayein
  if (isPro) {
    return (
      <button
        type="button"
        onClick={() => navigate('/dashboard')}
        className={`flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-5 py-3 font-semibold text-white transition hover:from-amber-500 hover:to-amber-600 ${className}`}
      >
        <Crown size={18} />
        You're Pro — Go to Dashboard
      </button>
    );
  }

  // Normal upgrade button
  return (
    <button
      type="button"
      onClick={handleUpgrade}
      disabled={redirecting}
      className={`flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700 disabled:opacity-60 ${className}`}
    >
      {redirecting ? (
        <>
          <Loader2 size={18} className="animate-spin" />
          Redirecting...
        </>
      ) : (
        <>
          <Crown size={18} />
          Upgrade to Pro — $9.99
        </>
      )}
    </button>
  );
};

export default UpgradeButton;