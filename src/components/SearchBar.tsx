import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { useWeather } from '../context/WeatherContext';

export const SearchBar: React.FC = () => {
  const [city, setCity] = useState('');
  const { fetchWeather } = useWeather();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeather(city.trim());
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="w-full max-w-md px-4 sm:px-0"
    >
      <div className="relative">
        <motion.input
          whileFocus={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name..."
          className="w-full px-4 sm:px-6 py-2.5 sm:py-3 text-white placeholder-white/60 glass-input rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 text-sm sm:text-base"
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white"
        >
          <Search size={20} />
        </motion.button>
      </div>
    </motion.form>
  );
};