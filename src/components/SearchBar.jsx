import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ onSearch, isDark }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for a city..."
          className={`w-full px-4 py-3 pl-12 rounded-xl border transition-all duration-300 ${
            isDark 
              ? 'bg-gray-800 text-white border-gray-700 focus:ring-blue-500' 
              : 'bg-white text-gray-900 border-gray-200 focus:ring-blue-400'
          } focus:outline-none focus:ring-2 focus:border-transparent`}
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${
          isDark ? 'text-gray-400' : 'text-gray-500'
        } w-5 h-5`} />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 
                   bg-blue-500 text-white px-4 py-1.5 rounded-lg
                   hover:bg-blue-600 transition-colors duration-300"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;