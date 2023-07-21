// types.ts

interface Daily {
    sunrise: [string];
    sunset: [string];
    time: [string];
    uv_index_max: [number];
    weathercode: [number];
  }
  
  interface DailyUnits {
    sunrise: string;
    sunset: string;
    time: string;
    uv_index_max: string;
    weathercode: string;
  }
  
  interface Hourly {
    apparent_temperature: [number];
    dewpoint_2m: [number];
    precipitation: [number];
    precipitation_probability: [number];
    rain: [number];
    relativehumidity_2m: [number];
    temperature_2m: [number];
    time: [string];
  }
  
  interface HourlyUnits {
    apparent_temperature: string;
    dewpoint_2m: string;
    precipitation: string;
    precipitation_probability: string;
    rain: string;
    relativehumidity_2m: string;
    temperature_2m: string;
    time: string;
  }
  
  interface Root {
    daily: Daily;
    daily_units: DailyUnits;
    elevation: number;
    generationtime_ms: number;
    hourly: Hourly;
    hourly_units: HourlyUnits;
    latitude: number;
    longitude: number;
    timezone: string;
    timezone_abbreviation: string;
    utc_offset_seconds: number;
  }
  