
import React, { useEffect } from 'react';

interface SimplePageProps {
  title: string;
  content: string;
}

const SimplePage: React.FC<SimplePageProps> = ({ title, content }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <div className="bg-navy-950 min-h-screen text-white pt-32 pb-20 font-sans relative">
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid-indigo opacity-80"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h1 className="text-4xl font-bold mb-8">{title}</h1>
        <div className="prose prose-lg prose-invert text-slate-400">
           <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default SimplePage;
