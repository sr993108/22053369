# 🌦️ Weather Dashboard

A responsive weather application built with React.js that provides real-time weather information for any city using the OpenWeatherMap API.

## ✨ Features

- 🔍 City search functionality
- 🌡️ Current temperature display (°C)
- ☁️ Weather condition and icon
- 💧 Humidity percentage
- 🌬️ Wind speed
- ⏳ Loading states with spinner animation
- 🚨 Error handling for invalid cities/API failures
- 📱 Fully responsive design

## 🛠️ Tech Stack

- **Framework**: React.js (Vite)
- **HTTP Client**: Axios
- **Styling**: Tailwind CSS
- **API**: OpenWeatherMap Current Weather Data
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- OpenWeatherMap API key (free tier)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/weather-dashboard.git
   cd weather-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Create `.env` file in root directory
   - Add your API key:
     ```env
     VITE_APP_API_KEY=your_api_key_here
     ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

## 🌐 API Integration

This project uses OpenWeatherMap's Current Weather Data API:

- **Endpoint**: `https://api.openweathermap.org/data/2.5/weather`
- **Required**: API key (free tier available)
- **Rate Limits**: 60 calls/minute, 1,000,000 calls/month (free tier)
- **Documentation**: [OpenWeatherMap API Docs](https://openweathermap.org/current)

## 🖥️ Usage

1. Enter a city name in the search bar
2. Click "Search" or press Enter
3. View current weather information including:
   - Temperature
   - Weather condition
   - Humidity
   - Wind speed
   - Weather icon

API key during deployment:
- Variable name: `VITE_APP_API_KEY`
- Value: Your OpenWeatherMap API key