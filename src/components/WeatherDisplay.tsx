import React from 'react';
import { Droplets, Wind, Thermometer } from 'lucide-react';
import { motion } from 'framer-motion';
import { useWeather } from '../context/WeatherContext';

export const WeatherDisplay: React.FC = () => {
  const { weatherData, unit, toggleUnit } = useWeather();

  if (!weatherData) return null;

  const convertTemp = (temp: number) => {
    if (unit === 'fahrenheit') {
      return ((temp * 9/5) + 32).toFixed(1);
    }
    return temp.toFixed(1);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="glassmorphism rounded-2xl p-4 sm:p-8 w-full max-w-md"
    >
      <motion.div
        variants={itemVariants}
        className="flex justify-between items-center mb-6 sm:mb-8"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-white">{weatherData.name}</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleUnit}
          className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm glass-card text-white rounded-lg hover:bg-white/20 transition-colors"
        >
          °{unit === 'celsius' ? 'C' : 'F'}
        </motion.button>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row items-center justify-center mb-6 sm:mb-8 space-y-4 sm:space-y-0"
      >
        <motion.img
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
          alt={weatherData.weather[0].description}
          className="w-24 h-24 sm:w-32 sm:h-32 drop-shadow-lg"
        />
        <motion.div
          variants={itemVariants}
          className="text-center sm:text-left sm:ml-4"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-6xl font-bold text-white"
          >
            {convertTemp(weatherData.main.temp)}°
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="text-white/90 capitalize text-base sm:text-lg"
          >
            {weatherData.weather[0].description}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
      >
        <motion.div
          variants={itemVariants}
          whileHover="hover"
          className="glass-card flex flex-row sm:flex-col items-center justify-between sm:justify-center p-4 rounded-xl cursor-pointer transition-all duration-300 hover:bg-white/20"
        >
          <div className="flex items-center sm:flex-col">
            <motion.div variants={iconVariants} className="mr-2 sm:mr-0">
              <Thermometer className="text-white mb-0 sm:mb-2" size={24} />
            </motion.div>
            <span className="text-sm text-white/80">Feels Like</span>
          </div>
          <span className="font-semibold text-white">{convertTemp(weatherData.main.feels_like)}°</span>
        </motion.div>
        <motion.div
          variants={itemVariants}
          whileHover="hover"
          className="glass-card flex flex-row sm:flex-col items-center justify-between sm:justify-center p-4 rounded-xl cursor-pointer transition-all duration-300 hover:bg-white/20"
        >
          <div className="flex items-center sm:flex-col">
            <motion.div variants={iconVariants} className="mr-2 sm:mr-0">
              <Droplets className="text-white mb-0 sm:mb-2" size={24} />
            </motion.div>
            <span className="text-sm text-white/80">Humidity</span>
          </div>
          <span className="font-semibold text-white">{weatherData.main.humidity}%</span>
        </motion.div>
        <motion.div
          variants={itemVariants}
          whileHover="hover"
          className="glass-card flex flex-row sm:flex-col items-center justify-between sm:justify-center p-4 rounded-xl cursor-pointer transition-all duration-300 hover:bg-white/20"
        >
          <div className="flex items-center sm:flex-col">
            <motion.div variants={iconVariants} className="mr-2 sm:mr-0">
              <Wind className="text-white mb-0 sm:mb-2" size={24} />
            </motion.div>
            <span className="text-sm text-white/80">Wind</span>
          </div>
          <span className="font-semibold text-white">{weatherData.wind.speed} m/s</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};