type coordinates = {
  lon: number;
  lad: number;
};

type summary = {
  title: string;
  description: string;
  icon: string;
};

type temperature = {
  actual: number;
  feelsLike: number;
  min: number;
  max: number;
};

type wind = {
  speed: number;
  deg: number;
};

type clouds = {
  all: number;
  visibility: number;
  humidity: number;
};

type weather = {
  summary: summary;
  temperature: temperature;
  wind: wind;
  clouds: clouds;
  timestamp: number;
};

type cityData = {
  name: string;
  country: string;
  coord: coordinates;
  weather: weather;
};

export default cityData;
