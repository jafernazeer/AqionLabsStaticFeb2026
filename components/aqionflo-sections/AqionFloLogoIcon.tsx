import React from 'react';

interface AqionFloLogoIconProps {
  className?: string;
}

const AqionFloLogoIcon: React.FC<AqionFloLogoIconProps> = ({ className = "w-10 h-10" }) => {
  return (
    <div className={`flex items-center justify-center shrink-0 ${className}`}>
      <div 
        className="w-full h-full bg-gradient-to-r from-indigo-400 to-purple-400"
        style={{
          WebkitMaskImage: "url('/images/aqionflo-icon-mask.png')",
          maskImage: "url('/images/aqionflo-icon-mask.png')",
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center"
        }}
      />
    </div>
  );
};

export default AqionFloLogoIcon;
