
import {
  CloudSun,
  Clock3,
  CalendarDays,
  Wind,
  Droplets,
  Sun,
} from "lucide-react";

export const metadata = {
  title: "Services | Atmos Weather",
  description: "Explore the weather features offered by Atmos Weather.",
};

const services = [
  {
    title: "Current Weather",
    description:
      "Check current temperature, feels-like temperature, and weather conditions.",
    icon: CloudSun,
  },
  {
    title: "Hourly Forecast",
    description:
      "Explore hourly temperatures and precipitation probabilities.",
    icon: Clock3,
  },
  {
    title: "7-Day Forecast",
    description:
      "View daily high and low temperatures to help plan your week.",
    icon: CalendarDays,
  },
  {
    title: "Wind Information",
    description:
      "Check wind speed and understand current wind conditions.",
    icon: Wind,
  },
  {
    title: "Humidity Details",
    description:
      "See relative humidity and learn more about the current atmosphere.",
    icon: Droplets,
  },
  {
    title: "Sunrise & Sunset",
    description:
      "Find the daily sunrise and sunset times for your selected city.",
    icon: Sun,
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-16 text-white sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            What We Offer
          </p>

          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            Weather tools for everyday life
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            Explore weather details and forecasts in one convenient place.
            Atmos Weather makes it easier to plan ahead.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="rounded-2xl border border-white/10 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  <Icon size={26} />
                </div>

                <h2 className="text-lg font-semibold">
                  {service.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}

