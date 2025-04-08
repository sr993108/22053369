import React from 'react';

const Loader = ({ isDark }) => {
  return (
    <div className={`absolute inset-0 flex items-center justify-center ${
      isDark ? 'bg-gray-900/50' : 'bg-white/50'
    } backdrop-blur-sm rounded-xl`}>
      <div className="flex flex-col items-center">
        <div className={`w-12 h-12 border-4 rounded-full animate-spin ${
          isDark
            ? 'border-blue-400 border-t-transparent'
            : 'border-blue-600 border-t-transparent'
        }`}></div>
        <p className={`mt-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          Fetching weather data...
        </p>
      </div>
    </div>
  );
};

export default Loader;