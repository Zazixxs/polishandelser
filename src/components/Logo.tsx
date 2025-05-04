import React from 'react';

interface LogoProps {
  size?: number; 
  altText?: string; 
}

const Logo: React.FC<LogoProps> = ({ size = 100, altText = 'Logo' }) => {
  return (
    <img
  src="/assets/icon.png" 
  alt={altText}
  width={size}
  height={size}
  style={{ display: 'block', margin: 'auto' }}
/>
  );
};

export default Logo;
