import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Cloud, Search, Droplets, Wind, Sun, Moon, RotateCw } from 'lucide-react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import ForecastDisplay from './components/ForecastDisplay';
import {SearchHistory} from './components/SearchHistory';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isDark, setIsDark] = useState(true);
  const [searchHistory, setSearchHistory] = useState([]);
  const [currentCity, setCurrentCity] = useState('');

  const API_KEY = import.meta.env.VITE_APP_API_KEY;

  const addToHistory = (city) => {
    setSearchHistory(prev => {
      const newHistory = [city, ...prev.filter(h => h !== city)].slice(0, 5);
      localStorage.setItem('searchHistory', JSON.stringify(newHistory));
      return newHistory;
    });
  };

  useEffect(() => {
    const savedHistory = localStorage.getItem('searchHistory');
    if (savedHistory) {
      setSearchHistory(JSON.parse(savedHistory));
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  const fetchWeatherData = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      setWeatherData({
        city: response.data.name,
        temp: response.data.main.temp,
        condition: response.data.weather[0].main,
        description: response.data.weather[0].description,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        icon: response.data.weather[0].icon,
        feels_like: response.data.main.feels_like,
      });
    } catch (err) {
      throw err;
    }
  };

  const fetchForecastData = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );

      const dailyForecasts = response.data.list
        .filter((item, index) => index % 8 === 0)
        .slice(0, 5)
        .map(item => ({
          date: new Date(item.dt * 1000),
          temp: item.main.temp,
          condition: item.weather[0].main,
          icon: item.weather[0].icon,
        }));

      setForecastData(dailyForecasts);
    } catch (err) {
      throw err;
    }
  };

  const fetchWeather = async (city) => {
    if (!city.trim()) {
      setError('Please enter a city name');
      return;
    }

    setLoading(true);
    setError('');
    setCurrentCity(city);

    try {
      await Promise.all([
        fetchWeatherData(city),
        fetchForecastData(city)
      ]);
      
      addToHistory(city);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch weather data');
      setWeatherData(null);
      setForecastData(null);
    } finally {
      setLoading(false);
    }
  };

  const refreshWeather = () => {
    if (currentCity) {
      fetchWeather(currentCity);
    }
  };

  const toggleTheme = () => {
    setIsDark(prev => {
      const newTheme = !prev;
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      return newTheme;
    });
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-sky-100 to-blue-300'
    } p-6`}>
      <div className="max-w-lg mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Cloud className={`w-10 h-10 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
            <h1 className={`text-4xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Weather<span className="text-blue-400">Cast</span>
            </h1>
          </div>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors ${
              isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'
            }`}
          >
            {isDark ? (
              <Sun className="w-6 h-6 text-yellow-400" />
            ) : (
              <Moon className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        <SearchBar onSearch={fetchWeather} isDark={isDark} />
        
        {searchHistory.length > 0 && (
          <SearchHistory
            history={searchHistory}
            onSelect={fetchWeather}
            isDark={isDark}
          />
        )}

        <div className="relative">
          {loading && <Loader isDark={isDark} />}
          {error && <ErrorMessage message={error} isDark={isDark} />}
          {weatherData && (
            <div className="space-y-6">
              <div className="flex justify-end">
                <button
                  onClick={refreshWeather}
                  className={`p-2 rounded-lg transition-colors ${
                    isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'
                  }`}
                >
                  <RotateCw className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                </button>
              </div>
              <WeatherDisplay data={weatherData} isDark={isDark} />
              {forecastData && (
                <ForecastDisplay forecast={forecastData} isDark={isDark} />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;