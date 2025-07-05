
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
      <img
        src="/lovable-uploads/5e6068ad-0c85-48f8-b82e-1a63ad58c89c.png"
        alt="Happy Holidays Logo"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Logo;
