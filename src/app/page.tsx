
"use client";

import { useCallback, useEffect, useState } from "react";
import { CloudSun, RefreshCw, AlertCircle } from "lucide-react";

import SearchBar from "@/components/SearchBar";
import CurrentWeather from "@/components/CurrentWeather";
import WeatherDetails from "@/components/WeatherDetails";
import HourlyForecast from "@/components/HourlyForecast";
import DailyForecast from "@/components/DailyForecast";

import { getWeather, searchCities } from "@/lib/weather";
import type { City, WeatherData } from "@/lib/weather";
import AboutSection from "@/components/AboutSection";


export default function Home() {
  const [city, setCity] = useState<City>({
    id: 1185241,
    name: "Dhaka",
    latitude: 23.7104,
    longitude: 90.4074,
    country: "Bangladesh",
    timezone: "Asia/Dhaka",
  });

  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);
  const [error, setError] = useState("");

  const loadWeather = useCallback(async (selectedCity: City) => {
    setLoading(true);
    setError("");

    try {
      const data = await getWeather(
        selectedCity.latitude,
        selectedCity.longitude,
      );

      setWeather(data);
    } catch {
      setError(
        "We couldn't load the weather. Check your internet connection and try again.",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadWeather(city);
  }, [city, loadWeather]);

  async function handleSearch(query: string): Promise<City[]> {
    setSearchLoading(true);

    try {
      return await searchCities(query);
    } finally {
      setSearchLoading(false);
    }
  }

  function handleSelect(selectedCity: City) {
    setCity(selectedCity);
  }

  return (
    <main className="min-h-screen bg-[#080F1D] text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
        <header className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10">
              <CloudSun className="h-7 w-7 text-cyan-300" />
            </div>

            <div>
              <h1 className="text-2xl font-bold tracking-tight text-white">
                Weather App<span className="text-cyan-300">.</span>
              </h1>
              <p className="text-xs text-slate-400">
                Your daily weather companion
              </p>
            </div>
          </div>

          <SearchBar
            onSearch={handleSearch}
            onSelect={handleSelect}
            loading={searchLoading}
          />
       
        </header>

        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            Weather overview
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
            Stay ahead of the weather.
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Live conditions and forecasts for your selected city.
          </p>
        </div>

        {loading && (
          <div
            role="status"
            aria-live="polite"
            className="space-y-5"
          >
            <p className="text-sm text-cyan-300">
              Loading weather for {city.name}...
            </p>

            <div className="h-72 animate-pulse rounded-3xl border border-slate-800 bg-slate-900" />

            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {Array.from({ length: 4 }, (_, i) => (
                <div
                  key={i}
                  className="h-28 animate-pulse rounded-2xl bg-slate-900"
                />
              ))}
            </div>

            <div className="h-48 animate-pulse rounded-3xl bg-slate-900" />
          </div>
        )}

        {!loading && error && (
          <div
            role="alert"
            className="rounded-3xl border border-rose-500/20 bg-rose-500/5 p-8 text-center"
          >
            <AlertCircle className="mx-auto h-10 w-10 text-rose-400" />
            <h3 className="mt-4 text-lg font-semibold text-white">
              Something went wrong
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-slate-400">
              {error}
            </p>

            <button
              onClick={() => void loadWeather(city)}
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              <RefreshCw className="h-4 w-4" />
              Try again
            </button>
          </div>
        )}

        {!loading && !error && weather && (
          <div className="space-y-5">
            <CurrentWeather city={city} weather={weather} />

            <WeatherDetails weather={weather} />

            <HourlyForecast weather={weather} />

            <DailyForecast weather={weather} />

            <AboutSection/>

       
          </div>
        )}
      </div>
    </main>
  );
}
