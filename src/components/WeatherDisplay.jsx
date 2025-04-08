import React from 'react';
import { Droplets, Wind, Thermometer } from 'lucide-react';

const WeatherDisplay = ({ data, isDark }) => {
  return (
    <div className={`rounded-2xl shadow-xl overflow-hidden border transition-colors duration-300 ${
      isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    }`}>
      <div className="p-6">
        <div className="text-center mb-6">
          <h2 className={`text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {data.city}
          </h2>
          <p className="text-blue-400 capitalize">{data.description}</p>
        </div>

        <div className="flex items-center justify-center mb-8">
          <img
            src={`https://openweathermap.org/img/wn/${data.icon}@4x.png`}
            alt="Weather icon"
            className="w-32 h-32"
          />
          <div className="ml-4">
            <p className={`text-6xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {Math.round(data.temp)}°
            </p>
            <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
              Feels like {Math.round(data.feels_like)}°
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className={`p-4 rounded-xl ${isDark ? 'bg-gray-700/50' : 'bg-gray-100'}`}>
            <div className="flex items-center gap-2 mb-2">
              <Droplets className="text-blue-400 w-5 h-5" />
              <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>Humidity</p>
            </div>
            <p className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {data.humidity}%
            </p>
          </div>
          
          <div className={`p-4 rounded-xl ${isDark ? 'bg-gray-700/50' : 'bg-gray-100'}`}>
            <div className="flex items-center gap-2 mb-2">
              <Wind className="text-blue-400 w-5 h-5" />
              <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>Wind Speed</p>
            </div>
            <p className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {data.wind} km/h
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;