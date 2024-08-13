import React, { useState } from 'react';
import axios from 'axios';
//import './Soil.css'; // Optional: add your own styles

function Soil() {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [soilData, setSoilData] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/auth/get-soil', {
                latitude,
                longitude,
            });
            setSoilData(response.data);
        } catch (error) {
            console.error('Error fetching soil data', error);
        }
    };

    return (
        <div>
            <h1>Soil Data</h1>
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
                <button type="submit">Get Soil Data</button>
            </form>
            {soilData && (
                <div>
                    <h2>Soil Data for {latitude}, {longitude}</h2>
                    <p><strong>Soil Organic Carbon Content (0-5cm):</strong> {soilData.organic_carbon_0_5cm} g/kg</p>
                    <p><strong>pH in H2O (0-5cm):</strong> {soilData.ph_h2o_0_5cm}</p>
                    <p><strong>Clay Content (0-5cm):</strong> {soilData.clay_0_5cm} %</p>
                    <p><strong>Sand Content (0-5cm):</strong> {soilData.sand_0_5cm} %</p>
                    <p><strong>Silt Content (0-5cm):</strong> {soilData.silt_0_5cm} %</p>
                </div>
            )}
        </div>
    );
}

export default Soil;
