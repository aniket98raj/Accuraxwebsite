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
import { ConfirmEmail } from "./pages/ConfirmEmail";

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
            <Route path="/confirm-email" element={<ConfirmEmail />} />

            {/* Dashboard pages — header only, no footer */}
            <Route
              path="/dashboard/godzilla"
              element={
                <>
                  <Header />
                  <main className="flex-1 min-w-0 w-full overflow-x-hidden">
                    <GodzillaDashboard />
                  </main>
                </>
              }
            />
            <Route
              path="/dashboard/wolf"
              element={
                <>
                  <Header />
                  <main className="flex-1 min-w-0 w-full overflow-x-hidden">
                    <WolfDashboard />
                  </main>
                </>
              }
            />
            <Route
              path="/dashboard/turtle"
              element={
                <>
                  <Header />
                  <main className="flex-1 min-w-0 w-full overflow-x-hidden">
                    <TurtleDashboard />
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
              path="/"
              element={
                <>
                  <Header />
                  <main className="flex-1 min-w-0 w-full overflow-x-hidden">
                    <Home />
                  </main>
                  <Footer />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <Header />
                  <main className="flex-1 min-w-0 w-full overflow-x-hidden">
                    <About />
                  </main>
                  <Footer />
                </>
              }
            />
            <Route
              path="/services"
              element={
                <>
                  <Header />
                  <main className="flex-1 min-w-0 w-full overflow-x-hidden">
                    <Services />
                  </main>
                  <Footer />
                </>
              }
            />
            <Route
              path="/pricing"
              element={
                <>
                  <Header />
                  <main className="flex-1 min-w-0 w-full overflow-x-hidden">
                    <Pricing />
                  </main>
                  <Footer />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <Header />
                  <main className="flex-1 min-w-0 w-full overflow-x-hidden">
                    <Contact />
                  </main>
                  <Footer />
                </>
              }
            />
            <Route
              path="/disclaimer"
              element={
                <>
                  <Header />
                  <main className="flex-1 min-w-0 w-full overflow-x-hidden">
                    <Disclaimer />
                  </main>
                  <Footer />
                </>
              }
            />
            <Route
              path="/risk-disclosure"
              element={
                <>
                  <Header />
                  <main className="flex-1 min-w-0 w-full overflow-x-hidden">
                    <RiskDisclosure />
                  </main>
                  <Footer />
                </>
              }
            />
            <Route
              path="/privacy-policy"
              element={
                <>
                  <Header />
                  <main className="flex-1 min-w-0 w-full overflow-x-hidden">
                    <PrivacyPolicy />
                  </main>
                  <Footer />
                </>
              }
            />
            <Route
              path="/terms-of-service"
              element={
                <>
                  <Header />
                  <main className="flex-1 min-w-0 w-full overflow-x-hidden">
                    <TermsOfService />
                  </main>
                  <Footer />
                </>
              }
            />
            <Route
              path="/cookie-policy"
              element={
                <>
                  <Header />
                  <main className="flex-1 min-w-0 w-full overflow-x-hidden">
                    <CookiePolicy />
                  </main>
                  <Footer />
                </>
              }
            />
            <Route
              path="/educational/godzilla"
              element={
                <>
                  <Header />
                  <main className="flex-1 min-w-0 w-full overflow-x-hidden">
                    <Godzilla />
                  </main>
                  <Footer />
                </>
              }
            />
            <Route
              path="/educational/wolf"
              element={
                <>
                  <Header />
                  <main className="flex-1 min-w-0 w-full overflow-x-hidden">
                    <Wolf />
                  </main>
                  <Footer />
                </>
              }
            />
            <Route
              path="/educational/turtle"
              element={
                <>
                  <Header />
                  <main className="flex-1 min-w-0 w-full overflow-x-hidden">
                    <Turtle />
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