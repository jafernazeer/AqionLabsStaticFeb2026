import React from 'react';

const PageLoader: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center w-full">
      <div className="relative w-12 h-12">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-navy-800 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-indigo-500 rounded-full animate-spin border-t-transparent"></div>
      </div>
    </div>
  );
};

export default PageLoader;