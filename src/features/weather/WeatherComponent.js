import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather, selectIsLoading, selectWeather } from "./weatherSlice";
import styles from "./Weather.module.css";

export function Weather() {
    const dispatch = useDispatch();
    const { temp, weather } = useSelector(selectWeather);
    const isLoading = useSelector(selectIsLoading);

    console.log(weather);

    useEffect(() => {
        dispatch(fetchWeather('Stockholm'));
    },[dispatch, isLoading]);

    if(isLoading) {
        return null;
    };

    if(!weather) {
        return null;
    }

    //const iconURL = (isLoading) ? `http://openweathermap.org/img/wn/${weather.icon}@2x.png` : '';
    //const description = (isLoading) ? '' : weather.description ;
    
    return (
        <div className={styles.rightcorner}>
            <div className={styles.weather}>
                <div className={styles.temperaturecontainer}>
                    <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}></img>
                    <div className={styles.weathertext}>
                        <p className={styles.temperature}>{temp} °C</p>
                        <p className={styles.weatherdescription}>{weather.description}</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}