
import type { WeatherData } from "@/lib/weather";
import { getWeatherInfo } from "@/lib/weather-codes";

export default function DailyForecast({
  weather,
}: {
  weather: WeatherData;
}) {
  const { daily, timezone } = weather;

  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 sm:p-6">
      <h2 className="mb-5 text-lg font-semibold text-white">
        7-day forecast
      </h2>

      <div className="space-y-1">
        {daily.time.map((date, index) => {
          const { label, Icon } = getWeatherInfo(daily.weather_code[index]);

          const day = new Date(`${date}T12:00:00`).toLocaleDateString(
            "en-US",
            {
              weekday: "short",
              timeZone: timezone,
            },
          );

          const fullDate = new Date(`${date}T12:00:00`).toLocaleDateString(
            "en-US",
            {
              month: "short",
              day: "numeric",
              timeZone: timezone,
            },
          );

          return (
            <div
              key={date}
              className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 rounded-xl px-2 py-3 transition hover:bg-slate-800/60 sm:grid-cols-[1fr_1.4fr_1fr]"
            >
              <div>
                <p className="text-sm font-medium text-white">
                  {index === 0 ? "Today" : day}
                </p>
                <p className="text-xs text-slate-500">{fullDate}</p>
              </div>

              <div className="flex items-center gap-2">
                <Icon
                  aria-label={label}
                  className="h-5 w-5 shrink-0 text-cyan-300"
                />
                <span className="hidden text-xs text-slate-400 sm:inline">
                  {label}
                </span>
              </div>

              <div className="flex items-center justify-end gap-3 text-sm">
                <span className="font-semibold text-white">
                  {Math.round(daily.temperature_2m_max[index])}°
                </span>
                <span className="text-slate-400">
                  {Math.round(daily.temperature_2m_min[index])}°
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-3 text-xs text-slate-500">
        Temperatures show the daily high and low in °C.
      </p>
    </section>
  );
}
