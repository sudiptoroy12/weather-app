
import { Clock } from "lucide-react";
import type { WeatherData } from "@/lib/weather";
import { getWeatherInfo } from "@/lib/weather-codes";

export default function HourlyForecast({
  weather,
}: {
  weather: WeatherData;
}) {
  const { hourly, current, timezone } = weather;

  const startIndex = Math.max(
    0,
    hourly.time.findIndex((time) => time >= current.time),
  );

  const hours = hourly.time
    .map((time, index) => ({ time, index }))
    .filter(({ time }) => time >= current.time)
    .slice(0, 12);

  if (hours.length === 0) {
    return (
      <p className="text-sm text-slate-400">
        Hourly forecast is currently unavailable.
      </p>
    );
  }

  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 sm:p-6">
      <div className="mb-5 flex items-center gap-2">
        <Clock className="h-5 w-5 text-cyan-400" />
        <h2 className="text-lg font-semibold text-white">Hourly forecast</h2>
        <span className="ml-auto text-xs text-slate-500">Next 12 hours</span>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-3">
        {hours.map(({ time, index }) => {
          const { label, Icon } = getWeatherInfo(
            hourly.weather_code[index],
            true,
          );

          const hourLabel =
            index === startIndex
              ? "Now"
              : new Date(time).toLocaleTimeString("en-US", {
                  hour: "numeric",
                  timeZone: timezone,
                });

          return (
            <div
              key={time}
              className="flex min-w-[82px] flex-col items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 px-3 py-4"
            >
              <span className="text-xs text-slate-400">{hourLabel}</span>
              <Icon
                aria-label={label}
                className="h-6 w-6 text-cyan-300"
                strokeWidth={1.5}
              />
              <span className="text-lg font-semibold text-white">
                {Math.round(hourly.temperature_2m[index])}°
              </span>
              <span className="text-xs text-slate-500">
                {hourly.precipitation_probability[index] ?? 0}% rain
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
