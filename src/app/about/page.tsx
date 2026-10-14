
import { CloudSun, Target, Code2 } from "lucide-react";

export const metadata = {
  title: "About | Atmos Weather",
  description: "Learn more about Atmos Weather and its mission.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-16 text-white sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <CloudSun className="mx-auto mb-5 text-cyan-400" size={52} />

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            About Weather App
          </p>

          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            Weather insights, made simple.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-slate-400">
            Weather App helps you explore current weather conditions
            and upcoming forecasts through a clean, intuitive interface.
            Find weather information for cities around the world and
            make better plans for your day.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
            <Target className="mb-4 text-cyan-400" size={30} />
            <h2 className="text-xl font-semibold">Our Mission</h2>
            <p className="mt-3 leading-7 text-slate-400">
              Make useful weather information easy to find,
              understand, and use in everyday life.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
            <Code2 className="mb-4 text-cyan-400" size={30} />
            <h2 className="text-xl font-semibold">Our Technology</h2>
            <p className="mt-3 leading-7 text-slate-400">
              Built with Next.js, React, TypeScript, Tailwind CSS,
              and weather data from Open-Meteo.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
