import cityData from 'definitions/cityData';
import contextType from 'definitions/contextType';
import useLocalStorage from 'hooks/useLocalStorage';
import type { NextPage } from 'next';
import { createContext, useContext as useReactContext, useEffect, useState } from 'react';
import getCities from 'utils/getCities';

import Props from './props';

export const DEFAULT_CITIES = ['Toronto', 'New York', 'Los Angeles', 'Chicago', 'Phoenix'];

const Context = createContext({});

export const useContext = (): contextType => {
  return useReactContext(Context) as contextType;
};

export const ContextProvider: NextPage<Props> = ({ children }: Props) => {
  const [currentCity, setCurrentCity] = useLocalStorage('cityData', null);
  const [cities, setCities] = useState<cityData[]>([]);
  const [loading, setLoading] = useState(true);

  const initCityWeathers = async () => {
    const cityData = await getCities(DEFAULT_CITIES);
    setCities(cityData);
    if (!currentCity) {
      setCurrentCity(cityData[0]);
    } else if (!DEFAULT_CITIES.some((city) => city === currentCity?.name)) {
      cityData.push(currentCity);
    }
    setLoading(false);
  };

  useEffect(() => {
    initCityWeathers();
  }, []);

  useEffect(() => {
    if (currentCity && !DEFAULT_CITIES.some((city) => city === currentCity?.name)) {
      setCities((prev) => {
        const clone = [...prev];
        clone.splice(5, 1, currentCity);
        return clone;
      });
    }
  }, [currentCity]);

  const value = {
    currentCity,
    setCurrentCity,
    cities,
    setCities,
    loading,
    setLoading,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
