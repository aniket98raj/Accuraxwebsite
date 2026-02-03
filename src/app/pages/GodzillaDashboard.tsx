import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { TrendingUp, TrendingDown, DollarSign, Percent, Target, Activity } from "lucide-react";

interface Trade {
  id: number;
  amount: number;
  outcome: "win" | "loss" | null;
  riskReward: number;
  profit: number;
  timestamp: Date;
}

export function GodzillaDashboard() {
  const [capital, setCapital] = useState<number>(100000);
  const [trades, setTrades] = useState<Trade[]>([]);
  const [tradeAmount, setTradeAmount] = useState<number>(0);
  const [riskReward, setRiskReward] = useState<number>(2);
  const [totalAllocation] = useState<number>(30);
  const [winProbability] = useState<number>(55);

  // Calculate statistics
  const completedTrades = trades.filter(t => t.outcome !== null);
  const wins = completedTrades.filter(t => t.outcome === "win").length;
  const losses = completedTrades.filter(t => t.outcome === "loss").length;
  const winRate = completedTrades.length > 0 ? (wins / completedTrades.length) * 100 : 0;
  const totalProfit = trades.reduce((sum, t) => sum + t.profit, 0);
  const currentCapital = capital + totalProfit;

  // Calculate 3% risk amount
  const riskAmount = currentCapital * 0.03;

  useEffect(() => {
    setTradeAmount(riskAmount);
  }, [riskAmount]);

  const executeTrade = (outcome: "win" | "loss") => {
    const profit = outcome === "win" ? tradeAmount * riskReward : -tradeAmount;
    
    const newTrade: Trade = {
      id: Date.now(),
      amount: tradeAmount,
      outcome,
      riskReward,
      profit,
      timestamp: new Date()
    };

    setTrades([newTrade, ...trades]);
  };

  const resetSimulation = () => {
    setTrades([]);
    setCapital(100000);
  };

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">🦖</span>
            <div>
              <h1 className="text-4xl font-bold text-white">GODZILLA Dashboard</h1>
              <p className="text-blue-400 text-lg">High Risk Growth Model</p>
            </div>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {/* Total Allocation */}
          <Card className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20">
            <div className="flex items-center gap-3 mb-2">
              <Target className="w-5 h-5 text-blue-400" />
              <p className="text-gray-400 text-sm">Total Allocation</p>
            </div>
            <p className="text-3xl font-bold text-white">{totalAllocation}</p>
            <p className="text-xs text-gray-500 mt-1">Max trades allowed</p>
          </Card>

          {/* Probability Percentage */}
          <Card className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20">
            <div className="flex items-center gap-3 mb-2">
              <Percent className="w-5 h-5 text-green-400" />
              <p className="text-gray-400 text-sm">Win Probability</p>
            </div>
            <p className="text-3xl font-bold text-white">{winProbability}%</p>
            <p className="text-xs text-gray-500 mt-1">Expected success rate</p>
          </Card>

          {/* Actual Win Rate */}
          <Card className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20">
            <div className="flex items-center gap-3 mb-2">
              <Activity className="w-5 h-5 text-purple-400" />
              <p className="text-gray-400 text-sm">Actual Win Rate</p>
            </div>
            <p className="text-3xl font-bold text-white">{winRate.toFixed(1)}%</p>
            <p className="text-xs text-gray-500 mt-1">Your performance</p>
          </Card>

          {/* Positive Outcomes */}
          <Card className="p-6 bg-gradient-to-br from-green-500/10 to-teal-500/10 border-green-500/20">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <p className="text-gray-400 text-sm">Winning Trades</p>
            </div>
            <p className="text-3xl font-bold text-green-400">{wins}</p>
            <p className="text-xs text-gray-500 mt-1">Positive outcomes</p>
          </Card>

          {/* Negative Outcomes */}
          <Card className="p-6 bg-gradient-to-br from-red-500/10 to-orange-500/10 border-red-500/20">
            <div className="flex items-center gap-3 mb-2">
              <TrendingDown className="w-5 h-5 text-red-400" />
              <p className="text-gray-400 text-sm">Losing Trades</p>
            </div>
            <p className="text-3xl font-bold text-red-400">{losses}</p>
            <p className="text-xs text-gray-500 mt-1">Negative outcomes</p>
          </Card>

          {/* Current Capital */}
          <Card className="p-6 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/20">
            <div className="flex items-center gap-3 mb-2">
              <DollarSign className="w-5 h-5 text-yellow-400" />
              <p className="text-gray-400 text-sm">Current Capital</p>
            </div>
            <p className={`text-3xl font-bold ${totalProfit >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              ₹{currentCapital.toLocaleString()}
            </p>
            <p className={`text-xs mt-1 ${totalProfit >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {totalProfit >= 0 ? '+' : ''}{totalProfit.toLocaleString()} ({((totalProfit / capital) * 100).toFixed(2)}%)
            </p>
          </Card>
        </div>

        {/* Trading Interface */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Trade Execution Panel */}
          <Card className="p-8 bg-black border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-6">Execute Trade</h2>
            
            <div className="space-y-6">
              {/* Capital Display */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Starting Capital
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    value={capital}
                    onChange={(e) => setCapital(Number(e.target.value))}
                    className="flex-1 bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                    disabled={trades.length > 0}
                  />
                  <span className="text-gray-400">INR</span>
                </div>
              </div>

              {/* Risk Amount (3% fixed) */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Risk Per Trade (3% Fixed)
                </label>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg px-4 py-3">
                  <p className="text-2xl font-bold text-white">₹{riskAmount.toLocaleString()}</p>
                  <p className="text-xs text-blue-400 mt-1">Automatically calculated as 3% of current capital</p>
                </div>
              </div>

              {/* Risk:Reward Ratio */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Risk:Reward Ratio
                </label>
                <input
                  type="number"
                  value={riskReward}
                  onChange={(e) => setRiskReward(Number(e.target.value))}
                  step="0.1"
                  min="1"
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Potential profit: ₹{(riskAmount * riskReward).toLocaleString()}
                </p>
              </div>

              {/* Trade Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <Button
                  onClick={() => executeTrade("win")}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-6"
                  size="lg"
                >
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Win Trade
                </Button>
                <Button
                  onClick={() => executeTrade("loss")}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-6"
                  size="lg"
                >
                  <TrendingDown className="w-5 h-5 mr-2" />
                  Loss Trade
                </Button>
              </div>

              {/* Reset Button */}
              <Button
                onClick={resetSimulation}
                variant="outline"
                className="w-full border-gray-700 hover:bg-gray-900"
              >
                Reset Simulation
              </Button>

              {/* Educational Note */}
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                <p className="text-sm text-yellow-400">
                  <strong>Educational Tool:</strong> This simulator helps you understand the GODZILLA money management system. 
                  It does not provide trading signals or guarantees.
                </p>
              </div>
            </div>
          </Card>

          {/* Trade History */}
          <Card className="p-8 bg-black border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-6">Trade History</h2>
            
            {trades.length === 0 ? (
              <div className="text-center py-12">
                <Activity className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-500">No trades executed yet</p>
                <p className="text-sm text-gray-600 mt-2">Execute your first trade to see history</p>
              </div>
            ) : (
              <div className="space-y-3 max-h-[600px] overflow-y-auto">
                {trades.map((trade) => (
                  <div
                    key={trade.id}
                    className={`p-4 rounded-lg border ${
                      trade.outcome === "win"
                        ? "bg-green-500/5 border-green-500/20"
                        : "bg-red-500/5 border-red-500/20"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {trade.outcome === "win" ? (
                          <TrendingUp className="w-5 h-5 text-green-400" />
                        ) : (
                          <TrendingDown className="w-5 h-5 text-red-400" />
                        )}
                        <span className={`font-semibold ${
                          trade.outcome === "win" ? "text-green-400" : "text-red-400"
                        }`}>
                          {trade.outcome === "win" ? "WIN" : "LOSS"}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">
                        {trade.timestamp.toLocaleTimeString()}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-gray-500">Risk Amount</p>
                        <p className="text-white font-medium">₹{trade.amount.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">R:R Ratio</p>
                        <p className="text-white font-medium">1:{trade.riskReward}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-gray-500">Profit/Loss</p>
                        <p className={`text-lg font-bold ${
                          trade.profit >= 0 ? "text-green-400" : "text-red-400"
                        }`}>
                          {trade.profit >= 0 ? "+" : ""}₹{trade.profit.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Card>
        </div>

        {/* Plan Rules Reminder */}
        <Card className="mt-8 p-8 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-blue-500/5 border border-blue-500/20">
          <h3 className="text-xl font-bold text-white mb-4">🦖 GODZILLA Plan Rules</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-black/50 rounded-lg p-4 border border-gray-800">
              <p className="text-blue-400 font-semibold mb-2">Fixed Risk</p>
              <p className="text-gray-300">Always risk exactly 3% of current capital per trade</p>
            </div>
            <div className="bg-black/50 rounded-lg p-4 border border-gray-800">
              <p className="text-purple-400 font-semibold mb-2">Win Probability</p>
              <p className="text-gray-300">System designed around ~55% probability of success</p>
            </div>
            <div className="bg-black/50 rounded-lg p-4 border border-gray-800">
              <p className="text-green-400 font-semibold mb-2">Risk:Reward</p>
              <p className="text-gray-300">Uses positive risk-reward structure for profitability</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
