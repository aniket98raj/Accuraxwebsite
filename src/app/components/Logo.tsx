export function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Gradient Definition */}
      <defs>
        <linearGradient id="xGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#9333EA" />
        </linearGradient>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#9333EA" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      
      {/* Background Circle */}
      <circle cx="50" cy="50" r="45" fill="url(#bgGradient)" />
      
      {/* X Shape with modern design */}
      <path 
        d="M 25 25 L 50 50 L 75 25 M 50 50 L 75 75 M 50 50 L 25 75" 
        stroke="url(#xGradient)" 
        strokeWidth="8" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Center dot for modern touch */}
      <circle cx="50" cy="50" r="6" fill="url(#xGradient)" />
    </svg>
  );
}

export function LogoIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div className={`${className} bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20`}>
      <svg 
        viewBox="0 0 24 24" 
        className="w-5 h-5"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* X icon with clean design */}
        <path 
          d="M 6 6 L 12 12 L 18 6 M 12 12 L 18 18 M 12 12 L 6 18" 
          stroke="white" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

// Alternative compact logo for tight spaces
export function LogoCompact({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <div className={`${className} bg-gradient-to-br from-blue-600 to-purple-600 rounded flex items-center justify-center`}>
      <svg 
        viewBox="0 0 16 16" 
        className="w-4 h-4"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M 4 4 L 8 8 L 12 4 M 8 8 L 12 12 M 8 8 L 4 12" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}