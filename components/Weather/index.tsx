import { useContext } from 'context/Main';
import cityData from 'definitions/cityData';
import { useAnimation } from 'framer-motion';
import type { NextPage } from 'next';
import { useEffect } from 'react';

import DetailedWeatherCard from './libs/DetailedWeatherCard';
import WeatherCard from './libs/WeatherCard';

export const DEFAULT_CITIES = ['Toronto', 'New York', 'Los Angeles', 'Chicago', 'Phoenix'];

const Weather: NextPage = () => {
  const controls = useAnimation();
  const { currentCity, setCurrentCity, cities, loading } = useContext();

  useEffect(() => {
    if (!loading) {
      controls.start((i) => ({
        opacity: 1,
        transition: { delay: (i + 2) * 0.2 },
      }));
    }
  }, [loading, controls]);

  const onSelectCard = (i: number) => {
    setCurrentCity(cities[i]);
  };

  return (
    <div className="flex-1 grid grid-cols-2 gap-4 my-12 items-center">
      {!loading && (
        <>
          <DetailedWeatherCard classes="col-span-2 md:col-span-1" data={currentCity} />
          <div className="col-span-2 md:col-span-1 flex flex-wrap items-center justify-center">
            {cities.map((city: cityData, i) => (
              <WeatherCard key={i} data={city} custom={i} controls={controls} onClick={onSelectCard} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;
