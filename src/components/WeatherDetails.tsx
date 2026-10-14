
import { Droplets, Wind, Sunrise, Sunset } from "lucide-react";
import type { WeatherData } from "@/lib/weather";

interface Props {
  weather: WeatherData;
}

export default function WeatherDetails({ weather }: Props) {
  const { current, daily, timezone } = weather;

  const sunrise = new Date(daily.sunrise[0]).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: timezone,
  });

  const sunset = new Date(daily.sunset[0]).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: timezone,
  });

  const details = [
    {
      label: "Humidity",
      value: `${current.relative_humidity_2m}%`,
      Icon: Droplets,
    },
    {
      label: "Wind speed",
      value: `${Math.round(current.wind_speed_10m)} km/h`,
      Icon: Wind,
    },
    { label: "Sunrise", value: sunrise, Icon: Sunrise },
    { label: "Sunset", value: sunset, Icon: Sunset },
  ];

  return (
    <section className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {details.map(({ label, value, Icon }) => (
        <div
          key={label}
          className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 transition hover:border-cyan-400/30"
        >
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Icon className="h-4 w-4 text-cyan-400" />
            {label}
          </div>
          <p className="mt-4 text-xl font-semibold text-white">{value}</p>
        </div>
      ))}
    </section>
  );
}
