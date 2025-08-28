import Image from 'next/image';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  alt?: string;
}

const sizeMap = {
  sm: 24,
  md: 32,
  lg: 48,
  xl: 64,
  '2xl': 96
};

export default function Logo({ size = 'md', className = '', alt = 'Advestors Logo' }: LogoProps) {
  const dimensions = sizeMap[size];
  
  return (
    <Image
      src="/images/Logo.png"
      alt={alt}
      width={dimensions}
      height={dimensions}
      className={`object-contain ${className}`}
      priority={size === 'lg' || size === 'xl' || size === '2xl'}
    />
  );
}
