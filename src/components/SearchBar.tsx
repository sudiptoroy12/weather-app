
"use client";

import { FormEvent, useState } from "react";
import { Search, MapPin, LoaderCircle } from "lucide-react";
import type { City } from "../lib/weather";

interface SearchBarProps {
  onSearch: (query: string) => Promise<City[]>;
  onSelect: (city: City) => void;
  loading: boolean;
}

export default function SearchBar({
  onSearch,
  onSelect,
  loading,
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<City[]>([]);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (query.trim().length < 2) {
      setError("Enter at least two characters.");
      setResults([]);
      return;
    }

    setError("");

    try {
      const cities = await onSearch(query.trim());
      setResults(cities);

      if (cities.length === 0) {
        setError("No cities found. Try another name.");
      }
    } catch {
      setResults([]);
      setError("Search failed. Please try again.");
    }
  }

  function chooseCity(city: City) {
    setQuery(city.name);
    setResults([]);
    setError("");
    onSelect(city);
  }

  return (
    <div className="relative w-full max-w-md">
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 rounded-2xl border border-slate-700/80 bg-slate-900/80 p-2 shadow-lg shadow-black/10 focus-within:border-cyan-400/70"
      >
        <Search className="ml-2 h-5 w-5 shrink-0 text-cyan-400" />

        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setError("");
            setResults([]);
          }}
          placeholder="Search a city..."
          aria-label="Search city"
          className="min-w-0 flex-1 bg-transparent py-2 text-sm text-white outline-none placeholder:text-slate-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:opacity-50"
        >
          {loading ? (
            <LoaderCircle className="h-4 w-4 animate-spin" />
          ) : (
            "Search"
          )}
        </button>
      </form>

      {error && (
        <p role="status" className="mt-2 text-sm text-rose-400">
          {error}
        </p>
      )}

      {results.length > 0 && (
        <div className="absolute z-20 mt-2 w-full overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl">
          {results.map((city) => (
            <button
              key={city.id}
              type="button"
              onClick={() => chooseCity(city)}
              className="flex w-full items-center gap-3 border-b border-slate-800 p-3 text-left transition last:border-0 hover:bg-slate-800"
            >
              <MapPin className="h-4 w-4 shrink-0 text-cyan-400" />

              <span className="min-w-0">
                <span className="block truncate text-sm font-medium text-white">
                  {city.name}
                  {city.admin1 ? `, ${city.admin1}` : ""}
                </span>
                <span className="block text-xs text-slate-400">
                  {city.country}
                </span>
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
