
interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo = ({ size = 'md', className = '' }: LogoProps) => {
  const sizeClasses = {
    sm: 'w-20 h-20',
    md: 'w-32 h-32',
    lg: 'w-40 h-40'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <img
        src="/lovable-uploads/ea7fa6f3-2622-498a-b1d0-3a00fc0ce003.png"
        alt="Happy Holidays Logo"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Logo;
