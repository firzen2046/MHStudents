import React, { useState, useEffect } from 'react';
import { Cloud, Sun, CloudRain, Wind, Droplets, MapPin, Loader2 } from 'lucide-react';

const weatherCodes = {
  0: { label: '天晴', icon: Sun },
  1: { label: '大致晴朗', icon: Sun },
  2: { label: '間中多雲', icon: Cloud },
  3: { label: '陰天', icon: Cloud },
  45: { label: '有霧', icon: Cloud },
  48: { label: '霧凇', icon: Cloud },
  51: { label: '微雨', icon: CloudRain },
  53: { label: '微雨', icon: CloudRain },
  55: { label: '毛毛雨', icon: CloudRain },
  61: { label: '小雨', icon: CloudRain },
  63: { label: '中雨', icon: CloudRain },
  65: { label: '大雨', icon: CloudRain },
  71: { label: '微雪', icon: CloudRain },
  73: { label: '中雪', icon: CloudRain },
  75: { label: '大雪', icon: CloudRain },
  80: { label: '陣雨', icon: CloudRain },
  81: { label: '陣雨', icon: CloudRain },
  82: { label: '大陣雨', icon: CloudRain },
  95: { label: '雷暴', icon: CloudRain },
  96: { label: '雷暴', icon: CloudRain },
  99: { label: '雷暴', icon: CloudRain },
};

export default function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=22.3193&longitude=114.1694&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&timezone=Asia/Hong_Kong'
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.current) {
          setWeather(data.current);
          setLoading(false);
        } else {
          setError(true);
          setLoading(false);
        }
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-5 h-32 flex items-center justify-center shadow-lg">
        <Loader2 className="w-8 h-8 text-white animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-5 text-white shadow-lg">
        <div className="flex items-center gap-2 mb-2">
          <MapPin className="w-4 h-4" />
          <span className="text-sm font-medium opacity-90">香港</span>
        </div>
        <p className="text-white/80">暫時無法載入天氣資訊</p>
      </div>
    );
  }

  const code = weather?.weather_code ?? 0;
  const info = weatherCodes[code] || weatherCodes[0];
  const WeatherIcon = info.icon;
  const temp = Math.round(weather?.temperature_2m ?? 0);
  const humidity = weather?.relative_humidity_2m ?? 0;
  const wind = Math.round(weather?.wind_speed_10m ?? 0);
  const feels = Math.round(weather?.apparent_temperature ?? 0);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-5 text-white shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium opacity-90">香港 · 即時天氣</span>
          </div>
          <div className="flex items-center gap-3">
            <WeatherIcon className="w-12 h-12 text-white" />
            <div>
              <span className="text-4xl font-bold">{temp}°</span>
              <p className="text-sm opacity-90">{info.label}</p>
            </div>
          </div>
        </div>
        <div className="text-right space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Droplets className="w-4 h-4" />
            <span>濕度 {humidity}%</span>
          </div>
          <div className="flex items-center gap-2">
            <Wind className="w-4 h-4" />
            <span>{wind} km/h</span>
          </div>
          <div className="opacity-80">體感 {feels}°</div>
        </div>
      </div>
    </div>
  );
}