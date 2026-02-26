import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Pricing } from "./pages/Pricing";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { Disclaimer } from "./pages/Disclaimer";
import { RiskDisclosure } from "./pages/RiskDisclosure";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfService } from "./pages/TermsOfService";
import { CookiePolicy } from "./pages/CookiePolicy";
import { Godzilla } from "./pages/educational/Godzilla";
import { Wolf } from "./pages/educational/Wolf";
import { Turtle } from "./pages/educational/Turtle";
import { GodzillaDashboard } from "./pages/GodzillaDashboard";
import { WolfDashboard } from "./pages/WolfDashboard";
import { TurtleDashboard } from "./pages/TurtleDashboard";

// AccuraX Trading Platform App Component
export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black flex flex-col">
        <Routes>
          {/* Login page without header/footer */}
          <Route path="/login" element={<Login />} />
          
          {/* All other pages with header/footer */}
          <Route
            path="/*"
            element={
              <>
                <Header />
                <main className="flex-1">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/disclaimer" element={<Disclaimer />} />
                    <Route path="/risk-disclosure" element={<RiskDisclosure />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-of-service" element={<TermsOfService />} />
                    <Route path="/cookie-policy" element={<CookiePolicy />} />
                    
                    {/* Educational Concepts Routes */}
                    <Route path="/educational/godzilla" element={<Godzilla />} />
                    <Route path="/educational/wolf" element={<Wolf />} />
                    <Route path="/educational/turtle" element={<Turtle />} />
                    
                    {/* Dashboard Routes */}
                    <Route path="/dashboard/godzilla" element={<GodzillaDashboard />} />
                    <Route path="/dashboard/wolf" element={<WolfDashboard />} />
                    <Route path="/dashboard/turtle" element={<TurtleDashboard />} />
                  </Routes>
                </main>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}