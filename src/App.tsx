import React, { useEffect } from 'react';
import { Cloud } from 'lucide-react';
import { motion } from 'framer-motion';
import { WeatherProvider } from './context/WeatherContext';
import { SearchBar } from './components/SearchBar';
import { WeatherDisplay } from './components/WeatherDisplay';
import { ErrorMessage } from './components/ErrorMessage';
import { useWeather } from './context/WeatherContext';

function WeatherDashboard() {
  const { fetchWeather, loading } = useWeather();

  useEffect(() => {
    const lastCity = localStorage.getItem('lastCity');
    if (lastCity) {
      fetchWeather(lastCity);
    }

    const interval = setInterval(() => {
      const lastCity = localStorage.getItem('lastCity');
      if (lastCity) {
        fetchWeather(lastCity);
      }
    }, 30000);

    return () => clearInterval(interval);
  }, [fetchWeather]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 px-4 py-6 sm:p-6"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex items-center justify-center mb-6 sm:mb-8"
        >
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatDelay: 5
            }}
          >
            <Cloud className="text-white mr-2" size={40} />
          </motion.div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Weather Dashboard</h1>
        </motion.div>

        <div className="space-y-4 sm:space-y-6 flex flex-col items-center">
          <SearchBar />
          <ErrorMessage />
          {loading ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="flex items-center justify-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="rounded-full h-8 w-8 border-b-2 border-white"
              />
            </motion.div>
          ) : (
            <WeatherDisplay />
          )}
        </div>
      </div>
    </motion.div>
  );
}

function App() {
  return (
    <WeatherProvider>
      <WeatherDashboard />
    </WeatherProvider>
  );
}

export default App;