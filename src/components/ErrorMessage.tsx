import React from 'react';
import { AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWeather } from '../context/WeatherContext';

export const ErrorMessage: React.FC = () => {
  const { error } = useWeather();

  return (
    <AnimatePresence>
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="glass-card border-l-4 border-red-400/50 p-4 w-full max-w-md mx-4 sm:mx-0 rounded-xl"
        >
          <motion.div
            initial={{ x: -10 }}
            animate={{ x: 0 }}
            className="flex items-center"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
            >
              <AlertCircle className="text-red-400 mr-2" />
            </motion.div>
            <p className="text-white text-sm sm:text-base">{error.message}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};