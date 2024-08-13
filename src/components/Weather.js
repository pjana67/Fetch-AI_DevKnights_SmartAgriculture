import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './Weather.css'

function Weather() {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [hour, setHour] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/auth/get-weather', {
                latitude,
                longitude,
                hour,
            });
            setWeatherData(response.data);
        } catch (error) {
            console.error('Error fetching weather data', error);
        }
    };

    return (
        <div>
            <h1>Weather Data</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Latitude: </label>
                    <input
                        type="text"
                        value={latitude}
                        onChange={(e) => setLatitude(e.target.value)}
                    />
                </div>
                <div>
                    <label>Longitude: </label>
                    <input
                        type="text"
                        value={longitude}
                        onChange={(e) => setLongitude(e.target.value)}
                    />
                </div>
                <div>
                    <label>Hour: </label>
                    <input
                        type="number"
                        value={hour}
                        onChange={(e) => setHour(e.target.value)}
                    />
                </div>
                <button type="submit">Get Weather</button>
            </form>
            {weatherData && (
                <div>
                    <h2>Weather at {hour}:00</h2>
                    <p>Temperature: {weatherData.temperature}°C</p>
                    <p>Humidity: {weatherData.humidity}%</p>
                    <p>Precipitation: {weatherData.precipitation}mm</p>
                    <p>Model: {weatherData.model}</p>
                </div>
            )}
        </div>
    );
}

export default Weather;
