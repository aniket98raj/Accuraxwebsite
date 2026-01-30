import { AlertTriangle, TrendingDown, DollarSign, Activity } from "lucide-react";

export function RiskDisclosure() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-black min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Critical Warning */}
        <div className="bg-red-500/10 border-2 border-red-500/50 rounded-xl p-6 mb-12">
          <div className="flex gap-4">
            <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-red-500 font-bold text-xl mb-3">HIGH RISK WARNING</h3>
              <p className="text-gray-300 mb-3">
                Trading in financial instruments carries a high level of risk and may not be 
                suitable for all investors. The high degree of leverage can work against you as 
                well as for you. Before deciding to trade, you should carefully consider your 
                investment objectives, level of experience, and risk appetite.
              </p>
              <p className="text-white font-bold">
                YOU COULD LOSE SOME OR ALL OF YOUR INITIAL INVESTMENT. DO NOT INVEST MONEY 
                THAT YOU CANNOT AFFORD TO LOSE.
              </p>
            </div>
          </div>
        </div>

        {/* Main Risk Categories */}
        <div className="space-y-8">
          {/* Market Risk */}
          <section className="bg-black border border-gray-800 rounded-xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <Activity className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Market Risk</h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Financial markets are inherently unpredictable and subject to various factors 
                    including economic conditions, geopolitical events, regulatory changes, and 
                    market sentiment. These factors can cause rapid and substantial price movements.
                  </p>
                  <h3 className="text-white font-bold mt-4 mb-2">Specific Market Risks Include:</h3>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">⚠</span>
                      <span><strong>Volatility:</strong> Prices can fluctuate dramatically within short timeframes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">⚠</span>
                      <span><strong>Liquidity Risk:</strong> Inability to exit positions at desired prices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">⚠</span>
                      <span><strong>Gap Risk:</strong> Markets can gap past your stop-loss orders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">⚠</span>
                      <span><strong>Slippage:</strong> Execution prices may differ from expected prices</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Leverage Risk */}
          <section className="bg-black border border-gray-800 rounded-xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <TrendingDown className="w-8 h-8 text-orange-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Leverage and Margin Risk</h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Leverage allows you to control larger positions with a smaller amount of capital. 
                    While this can amplify profits, it equally amplifies losses and can result in 
                    losing more than your initial investment.
                  </p>
                  <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 my-4">
                    <p className="text-orange-300 font-bold mb-2">Example of Leverage Risk:</p>
                    <p className="text-gray-300 text-sm">
                      With 10:1 leverage, a 10% adverse market move can result in a 100% loss of 
                      your invested capital. In some cases, you may be required to deposit additional 
                      funds to maintain your positions (margin call).
                    </p>
                  </div>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1">⚠</span>
                      <span><strong>Margin Calls:</strong> You may be required to deposit additional funds immediately</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1">⚠</span>
                      <span><strong>Forced Liquidation:</strong> Positions may be closed automatically if margin requirements aren't met</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1">⚠</span>
                      <span><strong>Amplified Losses:</strong> Small market moves can result in substantial losses</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Algorithmic Trading Risks */}
          <section className="bg-black border border-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Algorithmic and Automated Trading Risks</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                While algorithmic trading can be efficient, it carries unique risks that you should 
                understand:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <div>
                    <strong className="text-white">System Failures:</strong> Technical glitches, 
                    internet outages, or platform failures can prevent order execution or cause 
                    unintended trades
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <div>
                    <strong className="text-white">Over-Optimization:</strong> Strategies optimized 
                    on historical data may not perform well in live markets
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <div>
                    <strong className="text-white">Model Risk:</strong> Algorithms are based on 
                    assumptions that may not hold true in all market conditions
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <div>
                    <strong className="text-white">Black Swan Events:</strong> Unexpected events can 
                    cause strategies to fail catastrophically
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <div>
                    <strong className="text-white">Lack of Control:</strong> Automated systems may 
                    execute trades rapidly without human intervention
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Financial Loss Risk */}
          <section className="bg-black border border-gray-800 rounded-xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <DollarSign className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Risk of Capital Loss</h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p className="text-white font-bold">
                    THERE IS A SUBSTANTIAL RISK THAT YOU WILL LOSE MONEY TRADING.
                  </p>
                  <p>
                    The majority of retail traders lose money. According to various studies and 
                    regulatory disclosures, between 70-90% of retail traders lose money over time. 
                    You should assume that you will lose money and only trade with capital you can 
                    afford to lose entirely.
                  </p>
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 my-4">
                    <p className="text-yellow-300 font-bold mb-2">Important Considerations:</p>
                    <ul className="space-y-1 text-gray-300 text-sm ml-4">
                      <li>• Never trade with borrowed money</li>
                      <li>• Never trade with money needed for living expenses</li>
                      <li>• Never trade with your retirement savings</li>
                      <li>• Never trade with money you cannot afford to lose completely</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Additional Risks */}
          <section className="bg-black border border-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Additional Risk Factors</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-white font-bold mb-3">Operational Risks</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Internet connectivity failures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Platform or software malfunctions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Data feed errors or delays</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Cybersecurity threats</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold mb-3">Regulatory Risks</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Changes in trading regulations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Tax law modifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Market trading restrictions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Broker or exchange rule changes</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Your Responsibilities */}
          <section className="bg-black border border-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Your Responsibilities</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>By using AccuraX, you acknowledge and accept the following responsibilities:</p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <div>
                    <strong className="text-white">Understanding Risks:</strong> You fully understand 
                    the risks involved in trading and accept them
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <div>
                    <strong className="text-white">Financial Capacity:</strong> You have the financial 
                    capacity to bear losses without affecting your lifestyle
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <div>
                    <strong className="text-white">Due Diligence:</strong> You will conduct your own 
                    research and not rely solely on our platform
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <div>
                    <strong className="text-white">Professional Advice:</strong> You will seek 
                    professional financial advice as appropriate
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">✓</span>
                  <div>
                    <strong className="text-white">Monitor Positions:</strong> You will actively 
                    monitor your trading positions and strategies
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>

        {/* Acknowledgment */}
        <div className="mt-12 bg-gradient-to-r from-red-600/10 to-orange-600/10 border-2 border-red-500/30 rounded-xl p-8">
          <h3 className="text-xl font-bold text-white mb-4">Acknowledgment Required</h3>
          <p className="text-gray-300 mb-4">
            By using AccuraX, you acknowledge that:
          </p>
          <ul className="space-y-2 text-gray-300 mb-6">
            <li>• You have read and understood this risk disclosure</li>
            <li>• You accept all risks associated with trading</li>
            <li>• You understand you may lose your entire investment</li>
            <li>• You are solely responsible for your trading decisions</li>
            <li>• AccuraX is not liable for any losses you may incur</li>
          </ul>
          <div className="space-y-2 text-gray-300">
            <p><strong>Questions?</strong> Contact us at:</p>
            <p>Email: support@accurax.in</p>
            <p className="text-sm text-gray-400 mt-4">Last Updated: January 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}