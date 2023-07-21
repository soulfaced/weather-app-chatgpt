import {gql} from "@apollo/client";

const fetchWeatherQuery = gql`
query myQuery(
    $daily: String="sunrise,sunset,uv_index_max",
    $hourly: String="apparent_temperature,dewpoint_2m,precipitation_probability,rain,relativehumidity_2m", 
    $latitude: String, 
    $longitude: String, 
    $timezone: String
    ) {
  myQuery(
    daily: $daily
    hourly: $hourly
    latitude: $latitude
    longitude: $longitude
    timezone: $timezone
  ) {
    daily {
      sunrise
      sunset
      time
      uv_index_max
      weathercode
    }
    daily_units {
      sunrise
      sunset
      time
      uv_index_max
      weathercode
    }
    elevation
    generationtime_ms
    hourly {
      apparent_temperature
      dewpoint_2m
      precipitation
      precipitation_probability
      rain
      relativehumidity_2m
      temperature_2m
      time
    }
    hourly_units {
      apparent_temperature
      dewpoint_2m
      precipitation
      precipitation_probability
      rain
      relativehumidity_2m
      temperature_2m
      time
    }
    latitude
    longitude
    timezone
    timezone_abbreviation
    utc_offset_seconds
  }
}
`;
export default fetchWeatherQuery;