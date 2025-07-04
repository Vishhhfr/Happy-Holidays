
interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo = ({ size = 'md', className = '' }: LogoProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="url(#gradient)"
          stroke="white"
          strokeWidth="2"
        />
        
        {/* Mountain silhouette */}
        <path
          d="M20 65 L35 45 L50 55 L65 35 L80 65 Z"
          fill="white"
          opacity="0.9"
        />
        
        {/* Sun */}
        <circle
          cx="75"
          cy="30"
          r="8"
          fill="white"
          opacity="0.9"
        />
        
        {/* Sun rays */}
        <g stroke="white" strokeWidth="2" opacity="0.7">
          <line x1="75" y1="15" x2="75" y2="20" />
          <line x1="85" y1="20" x2="82" y2="23" />
          <line x1="90" y1="30" x2="85" y2="30" />
          <line x1="85" y1="40" x2="82" y2="37" />
        </g>
        
        {/* Palm tree */}
        <g fill="white" opacity="0.8">
          <rect x="28" y="55" width="2" height="12" />
          <path d="M25 55 Q29 50 33 55" />
          <path d="M25 57 Q29 52 33 57" />
        </g>
        
        {/* Gradient definition */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Logo;
