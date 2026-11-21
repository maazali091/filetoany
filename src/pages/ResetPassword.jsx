import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Loader2, Lock } from 'lucide-react';

function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // ✅ STEP 1: Check karein ke user ke paas recovery session hai ya nahi
  useEffect(() => {
    let mounted = true;

    const checkSession = async () => {
      // Wait for Supabase to detect the token from URL
      const { data: { session }, error } = await supabase.auth.getSession();

      if (!mounted) return;

      if (error || !session) {
        setError('Invalid or expired reset link. Please request a new one.');
      }
      setChecking(false);
    };

    // Auth state change listener (PASSWORD_RECOVERY event)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'PASSWORD_RECOVERY' && session) {
        setError('');
        setChecking(false);
      }
    });

    // Thora delay taake Supabase URL se token process kar sake
    const timer = setTimeout(checkSession, 1000);

    return () => {
      mounted = false;
      clearTimeout(timer);
      subscription.unsubscribe();
    };
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);

    // ✅ STEP 2: Pehle session check karein
    const { data: { session } } = await supabase.auth.getSession();

    if (!session) {
      setError('Session expired. Please request a new reset link.');
      setLoading(false);
      return;
    }

    // ✅ STEP 3: Password update karein
    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      setError(error.message);
    } else {
      setMessage('Password updated successfully! Redirecting to login...');
      setTimeout(() => navigate('/log-in'), 2000);
    }
    setLoading(false);
  };

  // Loading state (jab tak session check ho raha hai)
  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-5">
        <div className="flex flex-col items-center gap-3">
          <Loader2 size={32} className="animate-spin text-indigo-600" />
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Verifying your reset link...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-5 py-12">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Set New Password
        </h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Enter your new password below.
        </p>

        <form onSubmit={handleUpdate} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
              New Password
            </label>
            <div className="relative">
              <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
              Confirm Password
            </label>
            <div className="relative">
              <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-indigo-500 outline-none"
              />
            </div>
          </div>

          {error && (
            <div className="text-sm text-red-600 bg-red-50 dark:bg-red-950/30 px-3 py-2 rounded-lg">
              {error}
            </div>
          )}
          {message && (
            <div className="text-sm text-green-600 bg-green-50 dark:bg-green-950/30 px-3 py-2 rounded-lg">
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !!error}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition disabled:opacity-60"
          >
            {loading ? <Loader2 size={18} className="animate-spin" /> : 'Update Password'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;