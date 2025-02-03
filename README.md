Weather Dashboard

Overview

This Weather Dashboard is a modern web application built with React.js and TypeScript that fetches real-time weather data from the OpenWeatherMap API. Initially, only the search bar is visible, and city details appear after a user enters a city name. It provides users with current weather details, such as temperature, humidity, wind speed, and weather conditions. The application features a sleek glass morphism design, smooth animations using Framer Motion, and real-time updates with API polling.

Features

Search Functionality: Users can search for any city and get real-time weather details.

Initial View: Only the search bar is visible at the start; weather details appear after a search.

Current Weather Display: Shows temperature, humidity, wind speed, and weather conditions.

Weather Icons: Dynamically displays weather icons based on the API response.

API Polling: Automatically refreshes weather data every 30 seconds.

Local Storage: Saves the last searched city and loads it on page refresh.

Error Handling: Graceful error messages for incorrect city names, network issues, etc.

Temperature Unit Toggle: Allows users to switch between Celsius and Fahrenheit.

Responsive Design: Fully optimized for desktop, tablet, and mobile devices.

Animations with Framer Motion: Smooth page transitions, hover effects, and entrance animations.

Glassmorphism UI: Aesthetic design with frosted glass effects for a modern look.


/src
 ├── components
 │   ├── SearchBar.tsx       # Search input component
 │   ├── WeatherDisplay.tsx  # Displays weather details
 │   ├── ErrorMessage.tsx    # Handles and shows errors
 ├── context
 │   ├── WeatherContext.tsx  # Global state management
 ├── types
 │   ├── weather.ts          # TypeScript types for weather data
 ├── App.tsx                 # Main application file
 ├── index.tsx               # Entry point
 └── styles
     ├── globals.css         # Global styling

Technologies Used

React.js – For building UI components

TypeScript – For type safety and better development experience

Tailwind CSS – For styling with a modern utility-first approach

Framer Motion – For smooth animations and transitions

OpenWeatherMap API – For real-time weather data

React Context API – For global state management

Local Storage – For persisting user data

API Integration

The app fetches weather data from the OpenWeatherMap API using:

https://api.openweathermap.org/data/2.5/weather?q={city}&appid=38292c6f37b685d40de2e94412f0d5d8

Responsive Design

Mobile-friendly layout with optimized touch interactions

Stacked view for small screens, grid view for larger screens

Adaptive font sizes and spacing for better readability

Animations

Page Load: Smooth fade-in effect

Weather Display: Staggered reveal and hover animations

Search Bar: Scale effect on focus, smooth button animations

Error Messages: Slide-in and fade-out transitions
