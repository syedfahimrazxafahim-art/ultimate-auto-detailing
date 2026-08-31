import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showSubtitle = true,
  className = '',
}) => {
  const sizeMap = {
    sm: { imgClass: 'h-9 w-auto' },
    md: { imgClass: 'h-12 sm:h-14 w-auto' },
    lg: { imgClass: 'h-16 sm:h-20 w-auto' },
    xl: { imgClass: 'h-24 sm:h-28 w-auto' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Business Logo */}
      <img
        src="https://res.cloudinary.com/fzobzdco/image/upload/v1788215127/LOGO.jpg"
        alt="Ultimate Auto Detailing - Ultimate Car Detailing Solutions Official Logo"
        referrerPolicy="no-referrer"
        className={`${currentSize.imgClass} object-contain rounded-sm drop-shadow-[0_2px_12px_rgba(201,163,90,0.25)] transition-transform duration-300 hover:scale-[1.02]`}
      />
    </div>
  );
};

