import axios from "axios";
import { useEffect, useState } from "react";

const Wheater = ({ lat, lon }) => {


    const [wheater, setWheater] = useState(null);
    const [error, setError] = useState(null);
    const APIKEY = process.env.REACT_APP_WHEATER_API_KEY;


    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`)
            .then(res => {
                setWheater(res.data);
            })
            .catch(error => {
                setError(error);
            });
    }, []);

    if (error) {
        return (
            <p style={{ color: "red" }}>
                {error.message}
            </p>
        )
    }

    if (wheater == null) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    // celvin to celcius formula
    const tempInCelcius = parseFloat(wheater.main.temp - 273.15).toFixed(2);
    const iconSource = `https://openweathermap.org/img/wn/${wheater.weather[0].icon}@2x.png`;
    const windSpeed = wheater.wind.speed;

    return (
        <>
            <div>Temperature {tempInCelcius} Celcius</div>
            <img src={iconSource} width={100} height={100} />
            <div>wind {windSpeed} m/s</div>
        </>
    )
}

export default Wheater;