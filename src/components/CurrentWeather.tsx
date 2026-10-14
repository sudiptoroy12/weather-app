
import { MapPin, Thermometer } from "lucide-react";
import type { City, WeatherData } from "@/lib/weather";
import { getWeatherInfo } from "@/lib/weather-codes";

interface Props {
  city: City;
  weather: WeatherData;
}

export default function CurrentWeather({ city, weather }: Props) {
  const current = weather.current;
  const { label, Icon } = getWeatherInfo(
    current.weather_code,
    current.is_day === 1,
  );

  const date = new Date(current.time).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    timeZone: weather.timezone,
  });

  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-700/70 bg-gradient-to-br from-slate-800 via-slate-900 to-[#071321] p-6 shadow-2xl shadow-black/10 sm:p-8">
      <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <MapPin className="h-4 w-4 text-cyan-400" />
            {city.name}, {city.country}
          </div>
          <p className="mt-3 text-sm text-slate-400">{date}</p>
          <p className="mt-5 text-lg font-medium text-cyan-300">{label}</p>

          <div className="mt-1 flex items-start">
            <span className="text-7xl font-semibold tracking-tighter text-white sm:text-8xl">
              {Math.round(current.temperature_2m)}
            </span>
            <span className="mt-2 text-3xl text-cyan-300">°C</span>
          </div>

          <p className="mt-3 flex items-center gap-2 text-sm text-slate-400">
            <Thermometer className="h-4 w-4" />
            Feels like {Math.round(current.apparent_temperature)}°C
          </p>
        </div>

        <div className="flex h-28 w-28 items-center justify-center rounded-3xl border border-cyan-300/10 bg-cyan-300/5 sm:h-36 sm:w-36">
          <Icon className="h-20 w-20 text-cyan-300 sm:h-24 sm:w-24" strokeWidth={1.3} />
        </div>
      </div>

      <div className="relative mt-8 grid grid-cols-2 gap-3 border-t border-slate-700/70 pt-5 sm:grid-cols-3">
        <div>
          <p className="text-xs text-slate-400">Humidity</p>
          <p className="mt-1 text-lg font-semibold text-white">
            {current.relative_humidity_2m}%
          </p>
        </div>
        <div>
          <p className="text-xs text-slate-400">Wind speed</p>
          <p className="mt-1 text-lg font-semibold text-white">
            {Math.round(current.wind_speed_10m)} km/h
          </p>
        </div>
        <div>
          <p className="text-xs text-slate-400">Precipitation</p>
          <p className="mt-1 text-lg font-semibold text-white">
            {current.precipitation} mm
          </p>
        </div>
      </div>
    </section>
  );
}
