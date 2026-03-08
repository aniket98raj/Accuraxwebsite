import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ProtectedRoute } from "./components/ProtectedRoute";

// Pages
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Pricing } from "./pages/Pricing";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { ForgotPassword } from "./pages/ForgotPassword";
import { ResetPassword } from "./pages/ResetPassword";
import { Disclaimer } from "./pages/Disclaimer";
import { RiskDisclosure } from "./pages/RiskDisclosure";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfService } from "./pages/TermsOfService";
import { CookiePolicy } from "./pages/CookiePolicy";

// Educational
import { Godzilla } from "./pages/educational/Godzilla";
import { Wolf } from "./pages/educational/Wolf";
import { Turtle } from "./pages/educational/Turtle";

// Dashboards
import { GodzillaDashboard } from "./pages/GodzillaDashboard";
import { WolfDashboard } from "./pages/WolfDashboard";
import { TurtleDashboard } from "./pages/TurtleDashboard";

// Auth/Payment/User
import { PaymentPage } from "./pages/PaymentPage";
import { UserDashboard } from "./pages/UserDashboard";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="min-h-screen bg-black flex flex-col overflow-x-hidden w-full max-w-[100vw]">
          <Routes>
            {/* Pages WITHOUT header/footer */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />

            {/* Dashboard pages — header only, no footer */}
            <Route
              path="/dashboard/*"
              element={
                <>
                  <Header />
                  <main className="flex-1 min-w-0 w-full overflow-x-hidden">
                    <Routes>
                      <Route path="godzilla" element={<GodzillaDashboard />} />
                      <Route path="wolf" element={<WolfDashboard />} />
                      <Route path="turtle" element={<TurtleDashboard />} />
                    </Routes>
                  </main>
                </>
              }
            />

            {/* Protected pages — header only, no footer */}
            <Route
              path="/user-dashboard"
              element={
                <>
                  <Header />
                  <main className="flex-1 min-w-0 w-full overflow-x-hidden">
                    <ProtectedRoute>
                      <UserDashboard />
                    </ProtectedRoute>
                  </main>
                </>
              }
            />
            <Route
              path="/payment"
              element={
                <>
                  <Header />
                  <main className="flex-1 min-w-0 w-full overflow-x-hidden">
                    <ProtectedRoute>
                      <PaymentPage />
                    </ProtectedRoute>
                  </main>
                </>
              }
            />

            {/* All other pages with header + footer */}
            <Route
              path="/*"
              element={
                <>
                  <Header />
                  <main className="flex-1 min-w-0 w-full overflow-x-hidden">
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
                      <Route path="/educational/godzilla" element={<Godzilla />} />
                      <Route path="/educational/wolf" element={<Wolf />} />
                      <Route path="/educational/turtle" element={<Turtle />} />
                    </Routes>
                  </main>
                  <Footer />
                </>
              }
            />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}