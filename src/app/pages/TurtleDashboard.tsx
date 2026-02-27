import { TrendingUp, TrendingDown, DollarSign, Percent, Target, Activity, History, CheckCircle2, RotateCcw, BookOpen, X } from "lucide-react";

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
  sessionNumber: number;
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

export function TurtleDashboard() {
  const [sessionHistory, setSessionHistory] = useState<Session[]>([]);
  const [maxSessions] = useState<number>(5);
  const [totalAllocation] = useState<number>(9);
  const [winProbability] = useState<number>(22.22);
  const [showTutorial, setShowTutorial] = useState<boolean>(false);
  
  // Current session states
  const [capital, setCapital] = useState<number>(0);
  const [currentCapital, setCurrentCapital] = useState<number>(0);
  const [trades, setTrades] = useState<Trade[]>([]);
  const [sessionStarted, setSessionStarted] = useState<boolean>(false);
  const [sessionStartCapital, setSessionStartCapital] = useState<number>(0);
  
  // Fixed target capital at 1.07% - always enabled
  const targetPercent = 1.07;
  const targetCapital = sessionStarted ? sessionStartCapital * (1 + targetPercent / 100) : capital * (1 + targetPercent / 100);
  const targetProfit = sessionStarted ? sessionStartCapital * (targetPercent / 100) : capital * (targetPercent / 100);
  
  // Dynamic risk calculation
  // Initial risk percentage: 1.021% (calculated to reach 1.07% in 2 wins)
  const initialRiskPercent = 1.021;
  
  // Calculate risk amount based on current trade number
  const calculateRiskAmount = () => {
    if (!sessionStarted && trades.length === 0) {
      // First trade: use initial risk percentage
      return capital * (initialRiskPercent / 100);
    }
    
    if (sessionStarted) {
      // Calculate remaining profit needed to reach target
      const currentProfit = trades.reduce((sum, t) => sum + t.profit, 0);
      const remainingProfit = targetProfit - currentProfit;
      
      // If we've already reached or exceeded target, return 0
      if (remainingProfit <= 0) {
        return 0;
      }
      
      // Calculate risk amount needed: remaining profit / 0.85 (win rate)
      const nextRiskAmount = remainingProfit / 0.85;
      
      return nextRiskAmount;
    }
    
    return capital * (initialRiskPercent / 100);
  };
  
  const riskAmount = calculateRiskAmount();

  // Calculate current session statistics
  const completedTrades = trades.filter(t => t.outcome !== null);
  const wins = completedTrades.filter(t => t.outcome === "win").length;
  const losses = completedTrades.filter(t => t.outcome === "loss").length;
  const winRate = completedTrades.length > 0 ? (wins / completedTrades.length) * 100 : 0;
  const totalProfit = trades.reduce((sum, t) => sum + t.profit, 0);

  // Calculate overall statistics from all sessions
  const totalSessions = sessionHistory.length;
  const totalTradesAcrossAllSessions = sessionHistory.reduce((sum, s) => sum + s.trades.length, 0);
  const totalProfitAcrossAllSessions = sessionHistory.reduce((sum, s) => sum + s.totalProfit, 0);
  const totalWinsAcrossAllSessions = sessionHistory.reduce((sum, s) => sum + s.wins, 0);
  const totalLossesAcrossAllSessions = sessionHistory.reduce((sum, s) => sum + s.losses, 0);
  const overallWinRate = totalTradesAcrossAllSessions > 0 ? (totalWinsAcrossAllSessions / totalTradesAcrossAllSessions) * 100 : 0;

  const endSession = (reason: "trades_completed" | "target_reached") => {
    const finalCapital = capital;
    
    const newSession: Session = {
      id: Date.now(),
      sessionNumber: sessionHistory.length + 1,
      startCapital: sessionStartCapital,
      endCapital: finalCapital,
      totalProfit,
      profitPercent: (totalProfit / sessionStartCapital) * 100,
      trades: [...trades],
      wins,
      losses,
      winRate,
      riskPercent: initialRiskPercent,
      targetCapital: targetCapital,
      completionReason: reason,
      timestamp: new Date()
    };

    setSessionHistory([newSession, ...sessionHistory]);
    setSessionStarted(false);
    
    // Reset all fields for new session
    setCapital(0);
    setCurrentCapital(0);
    setTrades([]);
    setSessionStartCapital(0);
  };

  // Check if session should end
  useEffect(() => {
    if (sessionStarted) {
      const shouldEndByWins = wins >= 2; // End after 2 wins (Low Risk Growth Model)
      const shouldEndByTrades = trades.length >= totalAllocation; // Or after 9 total trades
      const shouldEndByTarget = capital >= targetCapital; // Or when 1.07% target is reached

      if (shouldEndByWins || shouldEndByTrades || shouldEndByTarget) {
        endSession(shouldEndByTarget ? "target_reached" : "trades_completed");
      }
    }
  }, [trades.length, wins, capital, sessionStarted, totalAllocation, targetCapital]);

  const executeTrade = (outcome: "win" | "loss") => {
    const riskAmountForTrade = riskAmount;
    const profit = outcome === "win" ? riskAmountForTrade * 0.85 : -riskAmountForTrade;
    
    const newTrade: Trade = {
      id: Date.now(),
      amount: riskAmountForTrade,
      outcome,
      riskReward: 0.85,
      profit,
      timestamp: new Date()
    };

    const updatedTrades = [newTrade, ...trades];
    setTrades(updatedTrades);
    setCapital(capital + profit);

    if (!sessionStarted) {
      setSessionStarted(true);
      setSessionStartCapital(capital);
    }
  };

  const resetSession = () => {
    setSessionStarted(false);
    setCapital(0);
    setCurrentCapital(0);
    setTrades([]);
    setSessionStartCapital(0);
  };

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-black min-h-screen w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Main Header */}
        <div className="mb-8">
          <div className="flex flex-col gap-4">
            {/* Title Section */}
            <div className="flex items-center gap-3">
              <span className="text-5xl">🐢</span>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white">TURTLE Dashboard</h1>
                <p className="text-blue-400 text-base sm:text-lg">Low Risk Growth Model</p>
              </div>
            </div>
            
            {/* Tutorial Button - Full width on mobile */}
            <Button
              onClick={() => setShowTutorial(true)}
              variant="outline"
              size="sm"
              className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300 hover:border-blue-500/50 w-full sm:w-auto"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Tutorial
            </Button>
          </div>
        </div>

        {/* ========== OVERALL DASHBOARD (6 Sessions) ========== */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Overall Dashboard</h2>
            <div className="text-sm text-gray-400">
              {totalSessions}/{maxSessions} Sessions Completed
            </div>
          </div>

          {/* Overall Statistics Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-2 sm:gap-3 mb-8">
            {/* Sessions Completed */}
            <Card className="p-2 sm:p-3 lg:p-4 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/30 hover:border-cyan-500/50 transition-all">
              <div className="flex flex-col gap-1">
                <History className="w-4 h-4 text-cyan-400 mb-1" />
                <p className="text-[9px] sm:text-[10px] lg:text-xs text-gray-400 leading-tight">Sessions</p>
                <p className="text-lg sm:text-xl lg:text-3xl font-bold text-white">{totalSessions}/{maxSessions}</p>
                <p className="text-[8px] sm:text-[9px] lg:text-xs text-gray-500">Completed</p>
              </div>
            </Card>

            {/* Total Trades */}
            <Card className="p-2 sm:p-3 lg:p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/30 hover:border-blue-500/50 transition-all">
              <div className="flex flex-col gap-1">
                <Target className="w-4 h-4 text-blue-400 mb-1" />
                <p className="text-[9px] sm:text-[10px] lg:text-xs text-gray-400 leading-tight">Total Trades</p>
                <p className="text-lg sm:text-xl lg:text-3xl font-bold text-white">{totalTradesAcrossAllSessions}</p>
                <p className="text-[8px] sm:text-[9px] lg:text-xs text-gray-500">Executed</p>
              </div>
            </Card>

            {/* Win Probability */}
            <Card className="p-2 sm:p-3 lg:p-4 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/30 hover:border-green-500/50 transition-all">
              <div className="flex flex-col gap-1">
                <Percent className="w-4 h-4 text-green-400 mb-1" />
                <p className="text-[9px] sm:text-[10px] lg:text-xs text-gray-400 leading-tight">Expected Win</p>
                <p className="text-lg sm:text-xl lg:text-3xl font-bold text-white">{winProbability}%</p>
                <p className="text-[8px] sm:text-[9px] lg:text-xs text-gray-500">Probability</p>
              </div>
            </Card>

            {/* Overall Win Rate */}
            <Card className="p-2 sm:p-3 lg:p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/30 hover:border-purple-500/50 transition-all">
              <div className="flex flex-col gap-1">
                <Activity className="w-4 h-4 text-purple-400 mb-1" />
                <p className="text-[9px] sm:text-[10px] lg:text-xs text-gray-400 leading-tight">Actual Win</p>
                <p className="text-lg sm:text-xl lg:text-3xl font-bold text-white">{overallWinRate.toFixed(1)}%</p>
                <p className="text-[8px] sm:text-[9px] lg:text-xs text-gray-500">Overall</p>
              </div>
            </Card>

            {/* Total Wins */}
            <Card className="p-2 sm:p-3 lg:p-4 bg-gradient-to-br from-green-500/10 to-teal-500/10 border-green-500/30 hover:border-green-500/50 transition-all">
              <div className="flex flex-col gap-1">
                <TrendingUp className="w-4 h-4 text-green-400 mb-1" />
                <p className="text-[9px] sm:text-[10px] lg:text-xs text-gray-400 leading-tight">Total Wins</p>
                <p className="text-lg sm:text-xl lg:text-3xl font-bold text-green-400">{totalWinsAcrossAllSessions}</p>
                <p className="text-[8px] sm:text-[9px] lg:text-xs text-gray-500">Profitable</p>
              </div>
            </Card>

            {/* Total Losses */}
            <Card className="p-2 sm:p-3 lg:p-4 bg-gradient-to-br from-red-500/10 to-orange-500/10 border-red-500/30 hover:border-red-500/50 transition-all">
              <div className="flex flex-col gap-1">
                <TrendingDown className="w-4 h-4 text-red-400 mb-1" />
                <p className="text-[9px] sm:text-[10px] lg:text-xs text-gray-400 leading-tight">Total Losses</p>
                <p className="text-lg sm:text-xl lg:text-3xl font-bold text-red-400">{totalLossesAcrossAllSessions}</p>
                <p className="text-[8px] sm:text-[9px] lg:text-xs text-gray-500">Negative</p>
              </div>
            </Card>

            {/* Total Profit/Loss */}
            <Card className="p-2 sm:p-3 lg:p-4 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/30 hover:border-yellow-500/50 transition-all">
              <div className="flex flex-col gap-1">
                <DollarSign className="w-4 h-4 text-yellow-400 mb-1" />
                <p className="text-[9px] sm:text-[10px] lg:text-xs text-gray-400 leading-tight">Total P/L</p>
                <p className={`text-sm sm:text-base lg:text-3xl font-bold break-all ${totalProfitAcrossAllSessions >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {totalProfitAcrossAllSessions >= 0 ? '+' : ''}₹{totalProfitAcrossAllSessions.toFixed(0)}
                </p>
                <p className="text-[8px] sm:text-[9px] lg:text-xs text-gray-500">Net</p>
              </div>
            </Card>
          </div>

          {/* Session Cards */}
          <Card className="p-4 sm:p-8 bg-black border-gray-800">
            <div className="flex items-center gap-3 mb-6">
              <History className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl font-bold text-white">All Sessions</h3>
            </div>

            {sessionHistory.length === 0 ? (
              <div className="text-center py-12">
                <History className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-500">No sessions completed yet</p>
                <p className="text-sm text-gray-600 mt-2">Start trading below to complete your first session</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className={`w-5 h-5 ${
                          session.totalProfit >= 0 ? "text-green-400" : "text-red-400"
                        }`} />
                        <p className="text-white font-bold">Session {session.sessionNumber}</p>
                      </div>
                      <p className={`text-xl font-bold ${
                        session.totalProfit >= 0 ? "text-green-400" : "text-red-400"
                      }`}>
                        {session.profitPercent >= 0 ? "+" : ""}{session.profitPercent.toFixed(1)}%
                      </p>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Start Capital</span>
                        <span className="text-white">₹{session.startCapital.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">End Capital</span>
                        <span className="text-white">₹{session.endCapital.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Trades</span>
                        <span className="text-white">{session.trades.length}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Win Rate</span>
                        <span className="text-white">{session.winRate.toFixed(1)}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">W/L</span>
                        <span className="text-white">
                          <span className="text-green-400">{session.wins}</span>
                          {" / "}
                          <span className="text-red-400">{session.losses}</span>
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <p className="text-xs text-gray-500">
                        {session.timestamp.toLocaleDateString('en-GB', { 
                          day: '2-digit', 
                          month: 'short', 
                          year: 'numeric' 
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Card>

          {/* Completion Message */}
          {sessionHistory.length >= maxSessions && (
            <Card className="p-8 bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/30 mt-6">
              <div className="text-center">
                <p className="text-3xl mb-2">🎉</p>
                <p className="text-green-400 font-bold text-xl mb-2">Congratulations!</p>
                <p className="text-gray-300">
                  You have completed all {maxSessions} sessions ({maxSessions * totalAllocation} total trades)
                </p>
              </div>
            </Card>
          )}
        </div>

        {/* ========== CURRENT SESSION DASHBOARD (9 Trades) ========== */}
        <div className="border-t-2 border-gray-800 pt-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Current Session {sessionHistory.length < maxSessions ? `(${sessionHistory.length + 1}/${maxSessions})` : ''}
            </h2>
            <Button
              onClick={resetSession}
              variant="outline"
              size="sm"
              type="button"
              disabled={!sessionStarted && capital === 0 && trades.length === 0}
              className="border-red-500/30 text-red-400 hover:bg-red-500/10 hover:text-red-300 hover:border-red-500/50 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-red-400 w-full sm:w-auto"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset Session
            </Button>
          </div>

          {/* Session Statistics Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-2 sm:gap-3 mb-8">
            {/* Trades Left */}
            <Card className="p-2 sm:p-3 lg:p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/30 hover:border-blue-500/50 transition-all">
              <div className="flex flex-col gap-1">
                <Target className="w-4 h-4 text-blue-400 mb-1" />
                <p className="text-[9px] sm:text-[10px] lg:text-xs text-gray-400 leading-tight">Trades Left</p>
                <p className="text-lg sm:text-xl lg:text-3xl font-bold text-white">{totalAllocation - trades.length}</p>
                <p className="text-[8px] sm:text-[9px] lg:text-xs text-gray-500">Remaining</p>
              </div>
            </Card>

            {/* Win Probability */}
            <Card className="p-2 sm:p-3 lg:p-4 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/30 hover:border-green-500/50 transition-all">
              <div className="flex flex-col gap-1">
                <Percent className="w-4 h-4 text-green-400 mb-1" />
                <p className="text-[9px] sm:text-[10px] lg:text-xs text-gray-400 leading-tight">Win Prob.</p>
                <p className="text-lg sm:text-xl lg:text-3xl font-bold text-white">{winProbability}%</p>
                <p className="text-[8px] sm:text-[9px] lg:text-xs text-gray-500">Expected</p>
              </div>
            </Card>

            {/* Actual Win Rate */}
            <Card className="p-2 sm:p-3 lg:p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/30 hover:border-purple-500/50 transition-all">
              <div className="flex flex-col gap-1">
                <Activity className="w-4 h-4 text-purple-400 mb-1" />
                <p className="text-[9px] sm:text-[10px] lg:text-xs text-gray-400 leading-tight">Actual Win</p>
                <p className="text-lg sm:text-xl lg:text-3xl font-bold text-white">{winRate.toFixed(1)}%</p>
                <p className="text-[8px] sm:text-[9px] lg:text-xs text-gray-500">This Session</p>
              </div>
            </Card>

            {/* Risk Tracker */}
            <Card className="p-2 sm:p-3 lg:p-4 bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/30 hover:border-orange-500/50 transition-all">
              <div className="flex flex-col gap-1">
                <Activity className="w-4 h-4 text-orange-400 mb-1" />
                <p className="text-[9px] sm:text-[10px] lg:text-xs text-gray-400 leading-tight">Risk Tracker</p>
                <p className="text-lg sm:text-xl lg:text-3xl font-bold text-white">9|2</p>
                <p className="text-[8px] sm:text-[9px] lg:text-xs text-gray-500">Trades|Wins</p>
              </div>
            </Card>

            {/* Winning Trades */}
            <Card className="p-2 sm:p-3 lg:p-4 bg-gradient-to-br from-green-500/10 to-teal-500/10 border-green-500/30 hover:border-green-500/50 transition-all">
              <div className="flex flex-col gap-1">
                <TrendingUp className="w-4 h-4 text-green-400 mb-1" />
                <p className="text-[9px] sm:text-[10px] lg:text-xs text-gray-400 leading-tight">Winning</p>
                <p className="text-lg sm:text-xl lg:text-3xl font-bold text-green-400">{wins}</p>
                <p className="text-[8px] sm:text-[9px] lg:text-xs text-gray-500">Positive</p>
              </div>
            </Card>

            {/* Losing Trades */}
            <Card className="p-2 sm:p-3 lg:p-4 bg-gradient-to-br from-red-500/10 to-orange-500/10 border-red-500/30 hover:border-red-500/50 transition-all">
              <div className="flex flex-col gap-1">
                <TrendingDown className="w-4 h-4 text-red-400 mb-1" />
                <p className="text-[9px] sm:text-[10px] lg:text-xs text-gray-400 leading-tight">Losing</p>
                <p className="text-lg sm:text-xl lg:text-3xl font-bold text-red-400">{losses}</p>
                <p className="text-[8px] sm:text-[9px] lg:text-xs text-gray-500">Negative</p>
              </div>
            </Card>

            {/* Starting Capital */}
            <Card className="p-2 sm:p-3 lg:p-4 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/30 hover:border-yellow-500/50 transition-all">
              <div className="flex flex-col gap-1">
                <DollarSign className="w-4 h-4 text-yellow-400 mb-1" />
                <p className="text-[9px] sm:text-[10px] lg:text-xs text-gray-400 leading-tight">Capital</p>
                <p className="text-sm sm:text-base lg:text-2xl font-bold text-white break-all">
                  ₹{sessionStarted ? Math.floor(sessionStartCapital) : Math.floor(capital)}
                </p>
                <p className="text-[8px] sm:text-[9px] lg:text-xs text-gray-500">Initial</p>
              </div>
            </Card>
          </div>

          {/* Trading Interface */}
          <div className="grid lg:grid-cols-2 gap-6 min-w-0">
            {/* Trade Execution Panel */}
            <Card className="p-4 sm:p-6 bg-black border-gray-800 min-w-0 w-full overflow-hidden">
              <h3 className="text-2xl font-bold text-white mb-6">Execute Trade</h3>
              
              <div className="space-y-6">
                {/* Capital Input */}
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
                          if (value === '') {
                            setCapital(0);
                            setCurrentCapital(0);
                            return;
                          }
                          const numValue = parseInt(value, 10);
                          if (!isNaN(numValue) && numValue >= 0 && value === numValue.toString()) {
                            setCapital(numValue);
                            setCurrentCapital(numValue);
                          }
                        }}
                        onWheel={(e) => e.currentTarget.blur()}
                        onKeyDown={(e) => {
                          if (e.key === '.' || e.key === ',' || e.key === '-' || e.key === 'e' || e.key === 'E') {
                            e.preventDefault();
                          }
                        }}
                        step="1"
                        min="0"
                        className="flex-1 bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        placeholder="Enter whole number only"
                        disabled={sessionHistory.length >= maxSessions}
                      />
                      <span className="text-gray-400">INR</span>
                    </div>
                  )}
                  <p className="text-xs text-gray-500 mt-1">
                    {sessionStarted ? 'Updates with each trade' : 'Enter your starting capital'}
                  </p>
                </div>

                {/* Risk Amount */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Risk Per Trade
                  </label>
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg px-4 py-3">
                    <p className="text-2xl font-bold text-white">₹{riskAmount.toFixed(2)}</p>
                    <p className="text-xs text-blue-400 mt-1">Automatically calculated based on current trade number</p>
                  </div>
                </div>

                {/* Trade Buttons */}
                <div className="flex gap-3">
                  <Button
                    onClick={() => executeTrade("win")}
                    className="flex-1 min-w-0 bg-green-600 hover:bg-green-700 text-white py-4 text-sm"
                    size="default"
                    disabled={capital === 0 || sessionHistory.length >= maxSessions}
                  >
                    <TrendingUp className="w-4 h-4 mr-1 flex-shrink-0" />
                    Win
                  </Button>
                  <Button
                    onClick={() => executeTrade("loss")}
                    className="flex-1 min-w-0 bg-red-600 hover:bg-red-700 text-white py-4 text-sm"
                    size="default"
                    disabled={capital === 0 || sessionHistory.length >= maxSessions}
                  >
                    <TrendingDown className="w-4 h-4 mr-1 flex-shrink-0" />
                    Loss
                  </Button>
                </div>
              </div>
            </Card>

            {/* Trade History */}
            <Card className="p-4 sm:p-6 bg-black border-gray-800 min-w-0 w-full overflow-hidden">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Trade History</h3>
              
              {trades.length === 0 ? (
                <div className="text-center py-12">
                  <Activity className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-500">No trades executed yet</p>
                  <p className="text-sm text-gray-600 mt-2">Set capital and risk % to start trading</p>
                </div>
              ) : (
                <div className="min-w-0 w-full overflow-x-auto">
                  <table className="w-full min-w-[380px]">
                    <thead>
                      <tr className="border-b border-gray-800">
                        <th className="text-left py-3 px-2 text-gray-400 font-medium text-xs">#</th>
                        <th className="text-left py-3 px-2 text-gray-400 font-medium text-xs">Outcome</th>
                        <th className="text-right py-3 px-2 text-gray-400 font-medium text-xs">Risk ₹</th>
                        <th className="text-right py-3 px-2 text-gray-400 font-medium text-xs">P/L</th>
                        <th className="text-right py-3 px-2 text-gray-400 font-medium text-xs">Capital</th>
                      </tr>
                    </thead>
                    <tbody>
                      {trades.map((trade, index) => {
                        const tradesUpToThis = trades.slice(index);
                        const capitalAfter = sessionStartCapital + tradesUpToThis.reduce((sum, t) => sum + t.profit, 0);
                        
                        return (
                          <tr 
                            key={trade.id}
                            className="border-b border-gray-800 hover:bg-gray-900/50 transition-colors"
                          >
                            <td className="py-3 px-2 text-gray-300 text-xs">{trades.length - index}</td>
                            <td className="py-3 px-2">
                              <div className="flex items-center gap-1">
                                {trade.outcome === "win" ? (
                                  <TrendingUp className="w-3 h-3 text-green-400 flex-shrink-0" />
                                ) : (
                                  <TrendingDown className="w-3 h-3 text-red-400 flex-shrink-0" />
                                )}
                                <span className={`font-semibold text-xs ${
                                  trade.outcome === "win" ? "text-green-400" : "text-red-400"
                                }`}>
                                  {trade.outcome === "win" ? "WIN" : "LOSS"}
                                </span>
                              </div>
                            </td>
                            <td className="py-3 px-2 text-right text-white text-xs whitespace-nowrap">
                              ₹{trade.amount.toFixed(0)}
                            </td>
                            <td className="py-3 px-2 text-right">
                              <span className={`font-bold text-xs whitespace-nowrap ${
                                trade.profit >= 0 ? "text-green-400" : "text-red-400"
                              }`}>
                                {trade.profit >= 0 ? "+" : "-"}₹{Math.abs(trade.profit).toFixed(0)}
                              </span>
                            </td>
                            <td className="py-3 px-2 text-right text-white font-medium text-xs whitespace-nowrap">
                              ₹{capitalAfter.toFixed(0)}
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
        </div>
      </div>

      {/* Tutorial Modal */}
      {showTutorial && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-blue-500/30 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-blue-500/10 p-3 rounded-lg">
                  <BookOpen className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Tutorial - How to Use</h2>
                  <p className="text-gray-400 text-sm">Follow these guidelines for successful trading practice</p>
                </div>
              </div>
              <Button
                onClick={() => setShowTutorial(false)}
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Point 1 */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/10 p-3 rounded-lg flex-shrink-0">
                  <span className="text-blue-400 font-bold text-lg">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg mb-2">Minimum Capital Requirement</h3>
                  <p className="text-gray-300">
                    Start with a minimum of <span className="text-green-400 font-semibold">₹10,000</span> to ensure proper risk management and trading flexibility.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex items-start gap-4">
                <div className="bg-purple-500/10 p-3 rounded-lg flex-shrink-0">
                  <span className="text-purple-400 font-bold text-lg">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg mb-2">Practice & Trade on Real Market Only</h3>
                  <div className="space-y-3">
                    <p className="text-gray-300">
                      <span className="text-yellow-400 font-semibold">📅 Trading Days:</span> Practice and trade only during actual market hours (<span className="text-blue-400">Monday to Friday</span>).
                    </p>
                    <p className="text-gray-300">
                      <span className="text-orange-400 font-semibold">🎯 Demo Account First:</span> Manage your risk by practicing on a <span className="text-green-400">Demo Account for at least one month</span> before trading with real capital.
                    </p>
                    <p className="text-gray-300">
                      <span className="text-green-400 font-semibold">💰 Profit Withdrawal:</span> Withdraw <span className="text-yellow-400">50% of your profit every Friday</span>. This is a crucial part of money management - secure your gains regularly!
                    </p>
                  </div>
                </div>
              </div>

              {/* Point 3 */}
              <div className="flex items-start gap-4">
                <div className="bg-green-500/10 p-3 rounded-lg flex-shrink-0">
                  <span className="text-green-400 font-bold text-lg">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg mb-2">Use Only One Strategy</h3>
                  <div className="space-y-3">
                    <p className="text-gray-300">
                      <span className="text-blue-400 font-semibold">• One Step at a Time:</span> Use only <span className="text-yellow-400">one strategy</span> per session. Do not mix multiple approaches.
                    </p>
                    <p className="text-gray-300">
                      <span className="text-purple-400 font-semibold">• Follow Money Management:</span> Stick to the prescribed <span className="text-green-400">money-management system</span> strictly without deviation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Point 4 */}
              <div className="flex items-start gap-4">
                <div className="bg-orange-500/10 p-3 rounded-lg flex-shrink-0">
                  <span className="text-orange-400 font-bold text-lg">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg mb-2">Trade with Your Selected Strategy - Even If You Lose</h3>
                  <div className="space-y-3">
                    <p className="text-gray-300">
                      Stay disciplined and trade only when your <span className="text-blue-400">chosen strategy signals</span> appear, regardless of previous losses.
                    </p>
                    
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                      <p className="text-yellow-400 font-semibold mb-2">📌 Example: Hammer Candle Strategy</p>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-green-400">✓</span>
                          <span>If you follow <span className="text-blue-400">hammer candle</span> as your strategy and you <span className="text-red-400">lose</span>, <span className="text-yellow-400 font-semibold">do NOT trade randomly</span>.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-400">✓</span>
                          <span><span className="text-orange-400 font-semibold">WAIT</span> for the next <span className="text-blue-400">hammer candle signal</span> to appear before trading again.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400">✗</span>
                          <span><span className="text-red-400 font-semibold">No Error Candle:</span> If you encounter a loss, <span className="text-yellow-400">STOP immediately</span>. Wait for your strategy signal (hammer candle) to appear again.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                      <p className="text-red-400 font-semibold flex items-center gap-2">
                        <span className="text-xl">⚠️</span>
                        <span>Critical Rule: Loss Management</span>
                      </p>
                      <p className="text-gray-300 text-sm mt-2">
                        If you face a loss, <span className="text-yellow-400 font-semibold">STOP trading immediately</span>. Do not revenge trade or deviate from your strategy. Wait patiently for your next valid signal.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Warning */}
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-lg">
                <p className="text-blue-400 font-semibold flex items-center gap-2">
                  <span className="text-xl">💡</span>
                  <span>Key Takeaway</span>
                </p>
                <p className="text-gray-300 text-sm mt-2">
                  <span className="text-yellow-400 font-semibold">Discipline and consistency</span> are the keys to success. Follow these rules without exception, and remember: trading is about <span className="text-green-400">learning concepts</span>, not chasing profits.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-800 p-6">
              <Button
                onClick={() => setShowTutorial(false)}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3"
              >
                Got it! Let's Start Trading
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}