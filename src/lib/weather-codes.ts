
import {
  Sun,
  CloudSun,
  Cloud,
  CloudFog,
  CloudDrizzle,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Moon,
} from "lucide-react";

export function getWeatherInfo(code: number, isDay = true) {
  if (code === 0) {
    return {
      label: isDay ? "Clear sky" : "Clear night",
      Icon: isDay ? Sun : Moon,
    };
  }

  if (code === 1) {
    return { label: "Mainly clear", Icon: isDay ? CloudSun : Moon };
  }

  if (code === 2) {
    return { label: "Partly cloudy", Icon: CloudSun };
  }

  if (code === 3) {
    return { label: "Overcast", Icon: Cloud };
  }

  if ([45, 48].includes(code)) {
    return { label: "Foggy", Icon: CloudFog };
  }

  if ([51, 53, 55, 56, 57].includes(code)) {
    return { label: "Drizzle", Icon: CloudDrizzle };
  }

  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) {
    return { label: "Rainy", Icon: CloudRain };
  }

  if ([71, 73, 75, 77, 85, 86].includes(code)) {
    return { label: "Snowy", Icon: CloudSnow };
  }

  if ([95, 96, 99].includes(code)) {
    return { label: "Thunderstorm", Icon: CloudLightning };
  }

  return { label: "Cloudy", Icon: Cloud };
}
