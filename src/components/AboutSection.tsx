
import {
  CloudSun,
  MapPin,
  Clock,
  CalendarDays,
  Gauge,
} from "lucide-react";

const features = [
  {
    title: "Search Any City",
    description: "Find weather conditions for your preferred location.",
    icon: MapPin,
  },
  {
    title: "Hourly Forecast",
    description: "Explore upcoming temperatures and precipitation chances.",
    icon: Clock,
  },
  {
    title: "7-Day Forecast",
    description: "Plan ahead with daily weather forecasts.",
    icon: CalendarDays,
  },
  {
    title: "Detailed Weather",
    description: "Check humidity, wind speed, and sunrise and sunset times.",
    icon: Gauge,
  },
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Open-Meteo API",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-6 sm:p-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400">
            <CloudSun size={32} />
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            About Us
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Weather insights, made simple.
          </h2>

          <p className="mt-5 leading-7 text-slate-400">
             Weather App is a modern weather application that helps
            you stay informed about current conditions and upcoming
            forecasts. Check temperature, feels-like conditions,
            humidity, wind speed, and precipitation with a clean,
            easy-to-use interface.
          </p>

          <p className="mt-4 leading-7 text-slate-400">
            Search for cities around the world, explore hourly
            forecasts, and plan ahead with a 7-day outlook—all
            powered by weather data from Open-Meteo.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-white/10 bg-slate-950/50 p-5 transition-colors hover:border-cyan-400/30"
              >
                <Icon className="mb-4 text-cyan-400" size={26} />

                <h3 className="font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <h3 className="text-center text-sm font-semibold uppercase tracking-widest text-slate-400">
            Built with modern technology
          </h3>

          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-cyan-400/15 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
