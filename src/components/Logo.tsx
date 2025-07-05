
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
        src="/lovable-uploads/3844e9bd-06e3-4e01-8d54-0fab8e1a5011.png"
        alt="Happy Holidays Logo"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Logo;
