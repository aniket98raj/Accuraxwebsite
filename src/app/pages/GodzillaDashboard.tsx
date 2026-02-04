import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { TrendingUp, TrendingDown, DollarSign, Percent, Target, Activity, History, CheckCircle2 } from "lucide-react";

interface Trade {
  id: number;
  amount: number;
  outcome: "win" | "loss" | null;
  riskReward: number;
  profit: number;
  timestamp: Date;
}

interface Session {
  id: number;
  startCapital: number;
  endCapital: number;
  totalProfit: number;
  profitPercent: number;
  trades: Trade[];
  wins: number;
  losses: number;
  winRate: number;
  riskPercent: number;
  targetCapital?: number;
  completionReason: "trades_completed" | "target_reached";
  timestamp: Date;
}

export function GodzillaDashboard() {
  const [totalPool, setTotalPool] = useState<number>(100000); // Total available funds
  const [capital, setCapital] = useState<number>(0); // Capital allocated to trading session
  const [currentCapital, setCurrentCapital] = useState<number>(100000); // Reserved capital (not in session)
  const [trades, setTrades] = useState<Trade[]>([]);
  const [tradeAmount, setTradeAmount] = useState<number>(0);
  const [riskPercent, setRiskPercent] = useState<number>(0);
  const [totalAllocation] = useState<number>(30);
  const [winProbability] = useState<number>(55);
  const [sessionHistory, setSessionHistory] = useState<Session[]>([]);
  const [sessionStarted, setSessionStarted] = useState<boolean>(false);
  const [sessionStartCapital, setSessionStartCapital] = useState<number>(0);
  const [sessionRiskPercent, setSessionRiskPercent] = useState<number>(0);
  const [enableTargetCapital, setEnableTargetCapital] = useState<boolean>(false);
  const [targetCapital, setTargetCapital] = useState<number>(0);

  // Calculate statistics
  const completedTrades = trades.filter(t => t.outcome !== null);
  const wins = completedTrades.filter(t => t.outcome === "win").length;
  const losses = completedTrades.filter(t => t.outcome === "loss").length;
  const winRate = completedTrades.length > 0 ? (wins / completedTrades.length) * 100 : 0;
  const totalProfit = trades.reduce((sum, t) => sum + t.profit, 0);

  // Calculate risk amount based on capital input (not currentCapital)
  const riskAmount = capital * (riskPercent / 100);

  useEffect(() => {
    setTradeAmount(riskAmount);
  }, [riskAmount]);

  // Check if session should end
  useEffect(() => {
    if (sessionStarted) {
      const shouldEndByTrades = trades.length >= totalAllocation;
      const shouldEndByTarget = enableTargetCapital && capital >= targetCapital;

      if (shouldEndByTrades || shouldEndByTarget) {
        endSession(shouldEndByTarget ? "target_reached" : "trades_completed");
      }
    }
  }, [trades, capital, sessionStarted]);

  const startSession = () => {
    setSessionStarted(true);
    setSessionStartCapital(capital);
    setSessionRiskPercent(riskPercent);
    setTrades([]);
  };

  const endSession = (reason: "trades_completed" | "target_reached") => {
    const finalCapital = capital;
    const newTotalPool = currentCapital + finalCapital;
    
    const newSession: Session = {
      id: Date.now(),
      startCapital: sessionStartCapital,
      endCapital: finalCapital,
      totalProfit,
      profitPercent: (totalProfit / sessionStartCapital) * 100,
      trades: [...trades],
      wins,
      losses,
      winRate,
      riskPercent: sessionRiskPercent,
      targetCapital: enableTargetCapital ? targetCapital : undefined,
      completionReason: reason,
      timestamp: new Date()
    };

    setSessionHistory([newSession, ...sessionHistory]);
    setSessionStarted(false);
    
    // Add final capital back to current capital
    setTotalPool(newTotalPool);
    setCurrentCapital(newTotalPool);
    
    // Reset all fields for new session
    setCapital(0);
    setRiskPercent(0);
    setEnableTargetCapital(false);
    setTargetCapital(0);
    setTrades([]);
  };

  const executeTrade = (outcome: "win" | "loss") => {
    // Use current values for the first trade, or locked session values for subsequent trades
    const activeRiskPercent = sessionStarted ? sessionRiskPercent : riskPercent;
    const activeCapital = capital;

    const riskAmountForTrade = activeCapital * (activeRiskPercent / 100);
    // Win gives 85% of risk amount, Loss gives -100% of risk amount
    const profit = outcome === "win" ? riskAmountForTrade * 0.85 : -riskAmountForTrade;
    
    const newTrade: Trade = {
      id: Date.now(),
      amount: riskAmountForTrade,
      outcome,
      riskReward: 0.85, // 85% profit on wins
      profit,
      timestamp: new Date()
    };

    const updatedTrades = [newTrade, ...trades];
    setTrades(updatedTrades);
    setCapital(capital + profit); // Update capital directly with profit/loss

    // If this is the first trade, start the session
    if (!sessionStarted) {
      setSessionStarted(true);
      setSessionStartCapital(capital);
      setSessionRiskPercent(riskPercent);
    }
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
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {/* Total Allocation */}
          <Card className="p-3 lg:p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/30 hover:border-blue-500/50 transition-all">
            <div className="flex flex-col gap-1">
              <Target className="w-4 h-4 lg:w-5 lg:h-5 text-blue-400 mb-1" />
              <p className="text-[10px] lg:text-xs text-gray-400 leading-tight">Current Session</p>
              <p className="text-xl lg:text-3xl font-bold text-white">{totalAllocation - trades.length}</p>
              <p className="text-[9px] lg:text-xs text-gray-500">Trades left</p>
            </div>
          </Card>

          {/* Probability Percentage */}
          <Card className="p-3 lg:p-4 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/30 hover:border-green-500/50 transition-all">
            <div className="flex flex-col gap-1">
              <Percent className="w-4 h-4 lg:w-5 lg:h-5 text-green-400 mb-1" />
              <p className="text-[10px] lg:text-xs text-gray-400 leading-tight">Win Probability</p>
              <p className="text-xl lg:text-3xl font-bold text-white">{winProbability}%</p>
              <p className="text-[9px] lg:text-xs text-gray-500">Expected</p>
            </div>
          </Card>

          {/* Actual Win Rate */}
          <Card className="p-3 lg:p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/30 hover:border-purple-500/50 transition-all">
            <div className="flex flex-col gap-1">
              <Activity className="w-4 h-4 lg:w-5 lg:h-5 text-purple-400 mb-1" />
              <p className="text-[10px] lg:text-xs text-gray-400 leading-tight">Actual Win Rate</p>
              <p className="text-xl lg:text-3xl font-bold text-white">{winRate.toFixed(1)}%</p>
              <p className="text-[9px] lg:text-xs text-gray-500">Performance</p>
            </div>
          </Card>

          {/* Positive Outcomes */}
          <Card className="p-3 lg:p-4 bg-gradient-to-br from-green-500/10 to-teal-500/10 border-green-500/30 hover:border-green-500/50 transition-all">
            <div className="flex flex-col gap-1">
              <TrendingUp className="w-4 h-4 lg:w-5 lg:h-5 text-green-400 mb-1" />
              <p className="text-[10px] lg:text-xs text-gray-400 leading-tight">Winning Trades</p>
              <p className="text-xl lg:text-3xl font-bold text-green-400">{wins}</p>
              <p className="text-[9px] lg:text-xs text-gray-500">Positive</p>
            </div>
          </Card>

          {/* Negative Outcomes */}
          <Card className="p-3 lg:p-4 bg-gradient-to-br from-red-500/10 to-orange-500/10 border-red-500/30 hover:border-red-500/50 transition-all">
            <div className="flex flex-col gap-1">
              <TrendingDown className="w-4 h-4 lg:w-5 lg:h-5 text-red-400 mb-1" />
              <p className="text-[10px] lg:text-xs text-gray-400 leading-tight">Losing Trades</p>
              <p className="text-xl lg:text-3xl font-bold text-red-400">{losses}</p>
              <p className="text-[9px] lg:text-xs text-gray-500">Negative</p>
            </div>
          </Card>

          {/* Current Capital */}
          <Card className="p-3 lg:p-4 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/30 hover:border-yellow-500/50 transition-all">
            <div className="flex flex-col gap-1">
              <DollarSign className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400 mb-1" />
              <p className="text-[10px] lg:text-xs text-gray-400 leading-tight">Current Capital</p>
              <p className="text-base lg:text-3xl font-bold text-white break-all">
                ₹{currentCapital.toFixed(2)}
              </p>
              <p className="text-[9px] lg:text-xs text-gray-500 truncate">
                {sessionStarted ? 'Reserved' : 'Available'}
              </p>
            </div>
          </Card>
        </div>

        {/* Trading Interface */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Trade Execution Panel */}
          <Card className="p-8 bg-black border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-6">Execute Trade</h2>
            
            <div className="space-y-6">
              {/* Capital Display */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Capital
                </label>
                {sessionStarted ? (
                  <div className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-3">
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-bold text-white">₹{capital.toFixed(2)}</p>
                      <span className="text-gray-400">INR</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <input
                      type="number"
                      value={capital || ''}
                      onChange={(e) => {
                        const value = e.target.value;
                        const previousCapital = capital;
                        
                        if (value === '') {
                          setCurrentCapital(currentCapital + previousCapital); // Return capital to current capital
                          setCapital(0);
                          return;
                        }
                        
                        const numValue = parseFloat(value);
                        if (!isNaN(numValue) && numValue >= 0 && numValue <= currentCapital + previousCapital) {
                          const difference = numValue - previousCapital;
                          setCapital(numValue);
                          setCurrentCapital(currentCapital - difference);
                        }
                      }}
                      onWheel={(e) => e.currentTarget.blur()}
                      min="0"
                      max={currentCapital + capital}
                      className="flex-1 bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <span className="text-gray-400">INR</span>
                  </div>
                )}
                <p className="text-xs text-gray-500 mt-1">
                  {sessionStarted ? 'Updates with each trade' : `Maximum: ₹${(currentCapital + capital).toLocaleString()}`}
                </p>
              </div>

              {/* Risk Percentage */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Risk Percentage
                </label>
                <input
                  type="number"
                  value={riskPercent || ''}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value === '') {
                      setRiskPercent(0);
                      return;
                    }
                    const numValue = parseFloat(value);
                    if (!isNaN(numValue) && numValue >= 0 && numValue <= 100) {
                      setRiskPercent(numValue);
                    }
                  }}
                  onWheel={(e) => e.currentTarget.blur()}
                  step="1"
                  min="0"
                  max="100"
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  disabled={sessionStarted}
                />
                <p className="text-xs text-gray-500 mt-1">
                  {sessionStarted ? 'Locked during session' : 'Percentage of capital to risk per trade'}
                </p>
              </div>

              {/* Risk Amount */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Risk Per Trade
                </label>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg px-4 py-3">
                  <p className="text-2xl font-bold text-white">₹{riskAmount.toFixed(2)}</p>
                  <p className="text-xs text-blue-400 mt-1">Automatically calculated as {riskPercent}% of current capital</p>
                </div>
              </div>

              {/* Target Capital (Optional) */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <input
                    type="checkbox"
                    id="enableTarget"
                    checked={enableTargetCapital}
                    onChange={(e) => setEnableTargetCapital(e.target.checked)}
                    className="w-4 h-4 rounded"
                    disabled={sessionStarted}
                  />
                  <label htmlFor="enableTarget" className="text-sm font-medium text-gray-400">
                    Enable Target Capital
                  </label>
                </div>
                {enableTargetCapital && (
                  <input
                    type="number"
                    value={targetCapital || ''}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value === '') {
                        setTargetCapital(0);
                        return;
                      }
                      const numValue = parseFloat(value);
                      if (!isNaN(numValue) && numValue >= 0) {
                        setTargetCapital(numValue);
                      }
                    }}
                    onWheel={(e) => e.currentTarget.blur()}
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    disabled={sessionStarted}
                    placeholder="Enter target capital"
                  />
                )}
                <p className="text-xs text-gray-500 mt-1">
                  {enableTargetCapital ? "Session ends when target is reached or 30 trades completed" : "Session ends after 30 trades"}
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
            </div>
          </Card>

          {/* Trade History */}
          <Card className="p-8 bg-black border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-6">Current Session Trades</h2>
            
            {trades.length === 0 ? (
              <div className="text-center py-12">
                <Activity className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-500">No trades executed yet</p>
                <p className="text-sm text-gray-600 mt-2">Execute your first trade to start a session</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">#</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Outcome</th>
                      <th className="text-right py-3 px-4 text-gray-400 font-medium text-sm">Risk Amount</th>
                      <th className="text-right py-3 px-4 text-gray-400 font-medium text-sm">P/L</th>
                      <th className="text-right py-3 px-4 text-gray-400 font-medium text-sm">Capital After</th>
                      <th className="text-right py-3 px-4 text-gray-400 font-medium text-sm">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {trades.map((trade, index) => {
                      // Calculate cumulative capital after this trade
                      const tradesUpToThis = trades.slice(index);
                      const capitalAfter = sessionStartCapital + tradesUpToThis.reduce((sum, t) => sum + t.profit, 0);
                      
                      return (
                        <tr 
                          key={trade.id}
                          className="border-b border-gray-800 hover:bg-gray-900/50 transition-colors"
                        >
                          <td className="py-3 px-4 text-gray-300">{trades.length - index}</td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              {trade.outcome === "win" ? (
                                <TrendingUp className="w-4 h-4 text-green-400" />
                              ) : (
                                <TrendingDown className="w-4 h-4 text-red-400" />
                              )}
                              <span className={`font-semibold ${
                                trade.outcome === "win" ? "text-green-400" : "text-red-400"
                              }`}>
                                {trade.outcome === "win" ? "WIN" : "LOSS"}
                              </span>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-right text-white">
                            ₹{trade.amount.toFixed(2)}
                          </td>
                          <td className="py-3 px-4 text-right">
                            <span className={`font-bold ${
                              trade.profit >= 0 ? "text-green-400" : "text-red-400"
                            }`}>
                              {trade.profit >= 0 ? "+" : "-"}₹{Math.abs(trade.profit).toFixed(2)}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-right text-white font-medium">
                            ₹{capitalAfter.toFixed(2)}
                          </td>
                          <td className="py-3 px-4 text-right text-gray-400 text-sm">
                            {trade.timestamp.toLocaleTimeString()}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </Card>
        </div>

        {/* Session History */}
        <Card className="p-8 bg-black border-gray-800">
          <div className="flex items-center gap-3 mb-6">
            <History className="w-6 h-6 text-blue-400" />
            <h2 className="text-2xl font-bold text-white">Session History</h2>
          </div>

          {sessionHistory.length === 0 ? (
            <div className="text-center py-12">
              <History className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-500">No completed sessions yet</p>
              <p className="text-sm text-gray-600 mt-2">Complete your first 30-trade session to see history</p>
            </div>
          ) : (
            <div className="space-y-4">
              {sessionHistory.map((session) => (
                <div
                  key={session.id}
                  className={`p-6 rounded-lg border ${
                    session.totalProfit >= 0
                      ? "bg-green-500/5 border-green-500/20"
                      : "bg-red-500/5 border-red-500/20"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className={`w-6 h-6 ${
                        session.totalProfit >= 0 ? "text-green-400" : "text-red-400"
                      }`} />
                      <div>
                        <p className="text-white font-bold">
                          {session.timestamp.toLocaleDateString('en-GB', { 
                            day: '2-digit', 
                            month: 'short', 
                            year: 'numeric' 
                          })} at {session.timestamp.toLocaleTimeString('en-US', { 
                            hour: '2-digit', 
                            minute: '2-digit',
                            hour12: true 
                          })}
                        </p>
                        <p className="text-xs text-gray-400">
                          {session.completionReason === "trades_completed" 
                            ? "Completed 30 trades" 
                            : "Target capital reached"}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`text-2xl font-bold ${
                        session.totalProfit >= 0 ? "text-green-400" : "text-red-400"
                      }`}>
                        {session.profitPercent >= 0 ? "+" : ""}{session.profitPercent.toFixed(2)}%
                      </p>
                      <p className="text-sm text-gray-400">
                        {session.totalProfit >= 0 ? "+" : ""}₹{session.totalProfit.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Start Capital</p>
                      <p className="text-white font-medium">₹{session.startCapital.toFixed(2)}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">End Capital</p>
                      <p className="text-white font-medium">₹{session.endCapital.toFixed(2)}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Trades</p>
                      <p className="text-white font-medium">{session.trades.length} trades</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Win Rate</p>
                      <p className="text-white font-medium">{session.winRate.toFixed(1)}%</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Wins</p>
                      <p className="text-green-400 font-medium">{session.wins}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Losses</p>
                      <p className="text-red-400 font-medium">{session.losses}</p>
                    </div>
                    {session.targetCapital && (
                      <div>
                        <p className="text-gray-500">Target Capital</p>
                        <p className="text-white font-medium">₹{session.targetCapital.toFixed(2)}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}