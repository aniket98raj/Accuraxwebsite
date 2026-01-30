import { AlertTriangle, Shield } from "lucide-react";

export function Disclaimer() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-black min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Main Disclaimer Section */}
        <div className="bg-gradient-to-br from-gray-900/80 to-black border-2 border-gray-700 rounded-2xl p-8 md:p-12 mb-12">
          {/* Main Content */}
          <div className="space-y-8 text-xl md:text-2xl text-white leading-relaxed">
            <p>
              All information provided on this website is strictly for{" "}
              <span className="font-bold">educational and informational purposes only</span>.
            </p>

            <p>
              We do not provide investment advice, trading advice, or financial recommendations.
            </p>

            <div>
              <p className="font-bold mb-4">We do not:</p>
              <ul className="space-y-3 ml-8">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>Manage client funds</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>Execute trades</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>Provide buy/sell signals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>Guarantee profits or recovery</span>
                </li>
              </ul>
            </div>

            <p>
              Trading and binary-style instruments involve substantial risk and may not be suitable for all individuals.
            </p>
          </div>
        </div>

        {/* Additional Important Notice */}
        <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 border-l-4 border-orange-500 rounded-r-2xl p-8 md:p-10 mb-12">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-orange-400 flex-shrink-0 mt-1" />
            <div className="space-y-4 text-lg md:text-xl text-gray-200 leading-relaxed">
              <h3 className="text-2xl font-bold text-white mb-4">Risk Warning</h3>
              <p>
                <span className="font-bold text-white">Past performance is not indicative of future results.</span> All educational 
                examples, case studies, and hypothetical scenarios are for learning purposes only.
              </p>
              <p>
                You should never trade with money you cannot afford to lose. Always consult with qualified 
                financial professionals before making any investment decisions.
              </p>
            </div>
          </div>
        </div>

        {/* Educational Focus Statement */}
        <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/30 rounded-2xl p-8 md:p-10 mb-12">
          <h3 className="text-3xl font-bold text-white mb-6">Our Educational Focus</h3>
          <div className="space-y-4 text-lg text-blue-100 leading-relaxed">
            <p>
              AccuraX is a <span className="font-bold text-white">purely educational platform</span>. We teach concepts, theories, 
              and methodologies related to trading and risk management.
            </p>
            <p>
              <span className="font-bold text-white">We teach concepts, not trades. We sell knowledge, not profits.</span>
            </p>
            <p>
              All subscription services provide access to educational materials, theoretical frameworks, and learning resources only.
            </p>
          </div>
        </div>

        {/* No Investment Advice Section */}
        <div className="bg-black border border-gray-800 rounded-2xl p-8 md:p-10 mb-12">
          <h3 className="text-3xl font-bold text-white mb-6">Not Investment Advice</h3>
          <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
            <p>
              Nothing on this website constitutes professional financial advice, investment advice, trading advice, 
              or recommendations of any kind.
            </p>
            <p>
              AccuraX is not a registered investment advisor, broker-dealer, or financial planner. We do not manage 
              funds, execute trades on behalf of clients, or provide personalized investment recommendations.
            </p>
            <p className="font-bold text-white">
              You are solely responsible for your own trading and investment decisions.
            </p>
          </div>
        </div>

        {/* Legal Compliance */}
        <div className="bg-black border border-gray-800 rounded-2xl p-8 md:p-10">
          <h3 className="text-3xl font-bold text-white mb-6">Legal Compliance</h3>
          <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
            <p>
              Users are responsible for ensuring their use of this platform and any trading activities comply 
              with all applicable laws and regulations in their jurisdiction.
            </p>
            <p>
              By using this website, you acknowledge that you have read, understood, and agreed to this disclaimer 
              and all associated risk warnings.
            </p>
            <p className="text-sm text-gray-400 mt-6">
              <strong>Last Updated:</strong> January 30, 2026
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Questions About This Disclaimer?</h3>
          <p className="text-gray-300 mb-4">
            If you have any questions about this disclaimer or our educational services, please contact us:
          </p>
          <div className="space-y-2 text-gray-300">
            <p><strong>Email:</strong> support@accurax.in</p>
            <p><strong>Legal:</strong> legal@accurax.in</p>
          </div>
        </div>
      </div>
    </div>
  );
}