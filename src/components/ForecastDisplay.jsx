import React from 'react';

const ForecastDisplay = ({ forecast, isDark }) => {
  const getDayName = (date) => {
    return new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(date);
  };

  return (
    <div className={`rounded-xl shadow-lg border p-4 transition-colors duration-300 ${
      isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    }`}>
      <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        5-Day Forecast
      </h3>
      <div className="grid grid-cols-5 gap-2">
        {forecast.map((day, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg text-center ${
              isDark ? 'bg-gray-700/50' : 'bg-gray-100'
            }`}
          >
            <p className={`text-sm font-medium mb-2 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {getDayName(day.date)}
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${day.icon}.png`}
              alt={day.condition}
              className="w-10 h-10 mx-auto"
            />
            <p className={`text-lg font-semibold ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {Math.round(day.temp)}°
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastDisplay;