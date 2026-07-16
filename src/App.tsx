import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackgroundAtmosphere from "@/components/effects/BackgroundAtmosphere";
import CustomCursor from "@/components/effects/CustomCursor";
import ScrollProgressBar from "@/components/effects/ScrollProgressBar";
import ScrollToTop from "@/components/effects/ScrollToTop";
import LoadingScreen from "@/components/effects/LoadingScreen";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 700, once: true, offset: 60, easing: "ease-out-cubic" });
    const timer = setTimeout(() => setLoading(false), 1300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen loading={loading} />
      <BackgroundAtmosphere />
      <CustomCursor />
      <ScrollProgressBar />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Footer />
            </>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ScrollToTop />
    </>
  );
}
