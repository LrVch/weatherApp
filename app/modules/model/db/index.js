"use strict";

const db = {
    api: {
        url: "http://api.openweathermap.org/data/2.5/",
        weather: "weather",
        forecast: "forecast",
        appid: "01f8517a7337057f1ed1f0d72f195c73"
    },
    activeCity: {
        id: "",
        main: {},
        details: [],
        hourly: [
            {
                date: "21.06",
                hours: [
                    {time: "11:00", temp: 22},
                    {time: "12:00", temp: 22},
                    {time: "13:00", temp: 22},
                    {time: "14:00", temp: 22},
                    {time: "15:00", temp: 22},
                    {time: "16:00", temp: 22}
                ]
            },
            {
                date: "22.06",
                hours: [
                    {time: "11:00", temp: 22},
                    {time: "12:00", temp: 22},
                    {time: "13:00", temp: 22},
                    {time: "14:00", temp: 22},
                    {time: "15:00", temp: 22},
                    {time: "16:00", temp: 22}
                ]
            }
        ],
        days: [
            {
                img: "img/m03d.svg",
                data: "12 Nov",
                main: "Cloudly",
                temp: {
                    day: 28,
                    night: 5
                }
            },
            {
                img: "img/m04d.svg",
                data: "12 Nov",
                main: "Cloudly",
                temp: {
                    day: 18,
                    night: 5
                }
            },
            {
                img: "img/m09d.svg",
                data: "12 Nov",
                main: "Cloudly",
                temp: {
                    day: 18,
                    night: 15
                }
            },
            {
                img: "img/m10d.svg",
                data: "12 Nov",
                main: "Cloudly",
                temp: {
                    day: 18,
                    night: 5
                }
            },
            {
                img: "img/m13d.svg",
                data: "12 Nov",
                main: "Cloudly",
                temp: {
                    day: 18,
                    night: 5
                }
            }
        ]
    },
    units: {
        pressure: {
            str: "Pressure",
            unit: " hPa"
        },
        humidity: {
            str: "Humidity",
            unit: "%"
        },
        wind: {
            str: "Wind",
            unit: "m/s"
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