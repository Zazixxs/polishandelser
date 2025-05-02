import React from 'react';

interface LogoProps {
  size?: number; // Size of the logo in pixels
  altText?: string; // Alternative text for the logo
}

const Logo: React.FC<LogoProps> = ({ size = 100, altText = 'Logo' }) => {
  return (
    <img
      src="./public/assets/icon.png" // Update this path to the correct location of icon.png
      alt={altText}
      width={size}
      height={size}
      style={{ display: 'block', margin: 'auto' }}
    />
  );
};

export default Logo;
