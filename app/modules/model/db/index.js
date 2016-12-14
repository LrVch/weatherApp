"use strict";

const db = {
    api: {
        url: "http://api.openweathermap.org/data/2.5/",
        weather: "weather",
        forecast: "forecast",
        appid: "01f8517a7337057f1ed1f0d72f195c73",
        cross: "https://cors-anywhere.herokuapp.com/"
    },
    activeCity: {
        id: "",
        main: {},
        details: [],
        hourly: [],
        days: []
    },
    units: {
        pressure: {
            str: "Pressure",
            unit: " hPa"
        },
        humidity: {
            str: "Humidity",
            unit: " %"
        },
        wind: {
            str: "Wind",
            unit: " m/s"
        }
    },
    getDetailsUnits(unit) {
        return this.units[unit];
    },
    cities: {},
    iconsMap: {
        "01d": "m01d",
        "01n": "m01n",
        "02d": "m02d",
        "02n": "m02n",
        "03d": "m03d",
        "03n": "m03n",
        "04d": "m04d",
        "04n": "m04n",
        "09d": "m09d",
        "09n": "m09n",
        "10d": "m10d",
        "10n": "m10n",
        "11d": "m11d",
        "11n": "m11n",
        "13d": "m13d",
        "13n": "m13n",
        "50d": "m50d",
        "50n": "m50n"
    },
    transformIcons(iconCode) {
        return this.iconsMap[iconCode];
    }
};

export default db;