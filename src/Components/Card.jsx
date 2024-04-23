import React, { useEffect, useState } from 'react';
import UserContext from '../Context/UserContext';
import { useContext } from 'react';

function Card() {


    const [cities, setcities, inprange, setinprange, sectors, setsectors, preferences, setpreferences, air, setair, water, setwater, land, setland, rainfall, setrainfall, data, setdata] = useContext(UserContext);
    const apiKey = '745c2287f03c47bd266d9e32d9e513ee';
    const [we,setwe]=useState({})

    useEffect(() => {
        function fetchWeatherData(lat, long) {
            if (!lat || !long) {
                return; // Exit early if latitude or longitude is undefined
            }
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=745c2287f03c47bd266d9e32d9e513ee`;

            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(dat => {
                    console.log(dat);
                    setwe(dat)
                    // Process the weather data here
                })
                .catch(error => {
                    console.error('There was a problem fetching the weather data:', error);
                });
        }
        fetchWeatherData(data.lat, data.lng);
    }, [data]);

    return (
        <div className="card">
            <h2>Climate Data</h2>
            {data && (
                <div>
                    <p>Latitude: {data.lat}</p>
                    <p>Longitude: {data.lng}</p>
                    <p>Temperature: {we.main && we.main.temp}</p>
                    <p>Humidity: {we.main && we.main.humidity}</p>
                    
                    <p>Clouds: {we.main && we.clouds.all}</p>

                </div>
            )}
        </div>
    );
}

export default Card;
