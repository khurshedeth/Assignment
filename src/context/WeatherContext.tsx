import React, { createContext, useContext, useState, useCallback } from 'react';
import { WeatherData, WeatherError } from '../types/weather';

interface WeatherContextType {
  weatherData: WeatherData | null;
  error: WeatherError | null;
  loading: boolean;
  unit: 'celsius' | 'fahrenheit';
  fetchWeather: (city: string) => Promise<void>;
  toggleUnit: () => void;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<WeatherError | null>(null);
  const [loading, setLoading] = useState(false);
  const [unit, setUnit] = useState<'celsius' | 'fahrenheit'>('celsius');

  const fetchWeather = useCallback(async (city: string) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=38292c6f37b685d40de2e94412f0d5d8&units=metric`
      );
      
      if (!response.ok) {
        throw new Error('City not found');
      }

      const data = await response.json();
      setWeatherData(data);
      localStorage.setItem('lastCity', city);
    } catch (err) {
      setError({ message: err instanceof Error ? err.message : 'Failed to fetch weather data' });
    } finally {
      setLoading(false);
    }
  }, []);

  const toggleUnit = () => {
    setUnit(prev => prev === 'celsius' ? 'fahrenheit' : 'celsius');
  };

  return (
    <WeatherContext.Provider value={{ weatherData, error, loading, unit, fetchWeather, toggleUnit }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error('useWeather must be used within a WeatherProvider');
  }
  return context;
};