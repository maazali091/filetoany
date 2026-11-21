import React from 'react'
import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import CompressPdf from './pages/CompressPdf';
import ExcelToPdf from './pages/ExcelToPdf';
import Home from './pages/Home'
import JpgToPdf from './pages/JpgToPdf';
import MergePdf from './pages/MergePdf';
import PdfToExcel from './pages/PdfToExcel';
import PdfToJpg from './pages/PdfToJpg';
import PdfToWord from './pages/PdfToWord';
import RotatePdf from './pages/RotatePdf';
import SplitPdf from './pages/SplitPdf';
import WordToPdf from './pages/WordToPdf';
import { supabase } from './lib/supabase'
import { useEffect } from 'react';
import Signup from './pages/SignUp';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoutes from './components/ProtectedRoutes';
import PricingPage from './pages/PricingPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import TermsOfService from './pages/TermsOfService';
import ScrollToTop from './components/ScrollToTop';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import CookieBanner from './components/CookieBanner';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [user, setUser] = useState(null);

  // ✅ NAYA: Pro user check karne ke liye
  const [isPro, setIsPro] = useState(false);

  // Prevent UI flicker while checking session
  const [authLoading, setAuthLoading] = useState(true);

  // ✅ NAYA: User ka plan database se fetch karne ka function
  const checkUserPlan = async (currentUser) => {
    if (!currentUser) {
      setIsPro(false);
      return;
    }

    const { data: profile, error } = await supabase
      .from('profiles')
      .select('plan')
      .eq('id', currentUser.id)
      .maybeSingle();

    if (error) {
      console.error("Plan fetch error:", error);
      setIsPro(false);
      return;
    }

    setIsPro(profile?.plan === 'pro');
  };

  useEffect(() => {
    let mounted = true;

    // -----------------------------------------
    // Get current logged-in session
    // -----------------------------------------
    const getCurrentSession = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (error) {
        console.error("Session error:", error);
      }

      if (!mounted) return;

      const currentUser = session?.user ?? null;
      setUser(currentUser);

      // ✅ NAYA: Plan bhi check karein
      await checkUserPlan(currentUser);

      setAuthLoading(false);
    };

    getCurrentSession();

    // -----------------------------------------
    // Listen for auth changes
    // -----------------------------------------
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        const currentUser = session?.user ?? null;
        setUser(currentUser);
        // ✅ NAYA: Login/logout par plan dobara check karein
        await checkUserPlan(currentUser);
      }
    );

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  // -----------------------------------------
  // Logout
  // -----------------------------------------
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Logout error:", error);
      return;
    }

    setUser(null);
    setIsPro(false); // ✅ Logout par Pro reset
  };

  return (
    <>
      <ScrollToTop />
      <Navbar
        isDark={isDark}
        setIsDark={setIsDark}
        user={user}
        onLogout={handleLogout}
        authLoading={authLoading}
        isPro={isPro}
      />
      <Routes>
        <Route path='/' element={<Home isPro={isPro} user={user} />} />
        <Route path='/jpg-to-pdf' element={<JpgToPdf />} />
        <Route path='/pdf-to-jpg' element={<PdfToJpg />} />
        <Route path='/word-to-pdf' element={<WordToPdf />} />
        <Route path='/pdf-to-word' element={<PdfToWord />} />
        <Route path='/merge-pdf' element={<MergePdf />} />
        <Route path='/split-pdf' element={<SplitPdf />} />
        <Route path='/compress-pdf' element={<CompressPdf />} />
        <Route path='/excel-to-pdf' element={<ExcelToPdf />} />
        <Route path='/pdf-to-excel' element={<PdfToExcel />} />
        <Route path='/rotate-pdf' element={<RotatePdf />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/log-in' element={<Login />} />
        <Route path='/dashboard' element={
          <ProtectedRoutes user={user} loading={authLoading}>
            <Dashboard />
          </ProtectedRoutes>
        } />

        {/* ✅ NAYA: Pro user ko Pricing page se Dashboard par bhejein */}
        {/* <Route
          path='/pricing'
          element={isPro ? <Navigate to="/dashboard" replace /> : <PricingPage />}
        /> */}
        {isPro ? <></> : <Route path='/pricing' element={<PricingPage user={user} />} />}
        <Route path='/privacy' element={<PrivacyPolicy />} />
        <Route path='/terms' element={<TermsOfService />} />
        <Route path='/refund' element={<RefundPolicy />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:slug' element={<BlogPost />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password' element={<ResetPassword />} />
      </Routes>
      <Footer />
      <CookieBanner />
    </>
  )
}

export default App