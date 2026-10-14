
import Link from "next/link";
import { CloudSun,  MapPin } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                <CloudSun size={28} />
              </span>

              <span className="text-xl font-bold tracking-tight text-white">
                Weather <span className="text-cyan-400">App</span>
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6">
              Weather insights, made simple. Stay updated with
              current conditions and forecasts to plan your day
              with confidence.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-cyan-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Weather information */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Weather Information
            </h3>

            <div className="flex items-center gap-2 text-sm">
              <MapPin size={17} className="text-cyan-400" />
              <span>Weather around the world</span>
            </div>

            <p className="mt-3 text-sm leading-6">
              Forecast data provided by{" "}
              <a
                href="https://open-meteo.com/"
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 transition-colors hover:text-cyan-300"
              >
                Open-Meteo
              </a>
              .
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Weather App. All rights reserved.
          </p>

          <p className="text-slate-500">
            Built with Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
