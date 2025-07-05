
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
        viewBox="0 0 200 200"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background circle with gradient */}
        <circle
          cx="100"
          cy="100"
          r="95"
          fill="url(#mainGradient)"
          stroke="#2d1b69"
          strokeWidth="6"
        />
        
        {/* Mountain layers - back mountains */}
        <path
          d="M30 120 L60 80 L90 100 L120 60 L150 90 L180 70 L200 100 L200 200 L0 200 L0 120 Z"
          fill="#1a0d4d"
          opacity="0.8"
        />
        
        {/* Mountain layers - middle mountains */}
        <path
          d="M20 130 L50 90 L80 110 L110 70 L140 100 L170 80 L190 110 L200 120 L200 200 L0 200 L0 130 Z"
          fill="#2d1b69"
          opacity="0.9"
        />
        
        {/* Mountain layers - front mountains */}
        <path
          d="M10 140 L40 100 L70 120 L100 80 L130 110 L160 90 L180 120 L200 130 L200 200 L0 200 L0 140 Z"
          fill="#4c1d95"
        />
        
        {/* Trees silhouettes */}
        <g fill="#1a0d4d" opacity="0.7">
          <polygon points="45,120 50,100 55,120" />
          <polygon points="65,125 70,105 75,125" />
          <polygon points="85,118 90,98 95,118" />
          <polygon points="125,115 130,95 135,115" />
          <polygon points="145,122 150,102 155,122" />
        </g>
        
        {/* Sun */}
        <circle
          cx="140"
          cy="50"
          r="18"
          fill="white"
          opacity="0.95"
        />
        
        {/* Sun rays */}
        <g stroke="white" strokeWidth="3" opacity="0.8">
          <line x1="140" y1="25" x2="140" y2="35" />
          <line x1="158" y1="32" x2="152" y2="38" />
          <line x1="165" y1="50" x2="155" y2="50" />
          <line x1="158" y1="68" x2="152" y2="62" />
          <line x1="140" y1="75" x2="140" y2="65" />
          <line x1="122" y1="68" x2="128" y2="62" />
          <line x1="115" y1="50" x2="125" y2="50" />
          <line x1="122" y1="32" x2="128" y2="38" />
        </g>
        
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Logo;
