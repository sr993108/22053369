import React from 'react';
import { History } from 'lucide-react';

export const SearchHistory = ({ history, onSelect, isDark }) => {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-2">
        <History className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Recent searches</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {history.map((city, index) => (
          <button
            key={index}
            onClick={() => onSelect(city)}
            className={`px-3 py-1 rounded-full text-sm transition-colors duration-200 ${
              isDark
                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
};