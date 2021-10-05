import { useContext } from 'context/Main';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import getCities from 'utils/getCities';

import cities from '../cities';
import Props from './props';

const Search: NextPage<Props> = ({ show, closeSearch }: Props) => {
  const { setCurrentCity } = useContext();
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<string[]>([]);

  const finishSearchHandler = async (city = search) => {
    closeSearch();
    const weatherData = await getCities([city]);
    if (weatherData) setCurrentCity(weatherData[0]);
  };

  useEffect(() => {
    let results: string[] = [];
    const timeout = setTimeout(() => {
      results = cities.filter((city) => city.toLowerCase().startsWith(search.toLowerCase()));

      setResults(results.slice(0, 10));
    }, 1000);

    return () => clearTimeout(timeout);
  }, [search]);

  return show ? (
    <div className="z-50 fixed top-1/4 left-1/2 transform -translate-x-2/4 w-3/4 md:max-w-2xl">
      <div className="py-6 px-12 mb-4 rounded-full bg-black-700 dark:bg-white-700 w-full">
        <input
          className="border-none outline-none w-full text-2xl bg-black-700 dark:bg-white-700 text-white-900 dark:text-black-700"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={(e) => e.key == 'Enter' && finishSearchHandler()}
        />
      </div>
      {results.map((city, i) => (
        <button
          key={i}
          className="p-4 w-full bg-black-700 hover:bg-black-900 dark:bg-white-700 dark:hover:bg-white-900 text-2xl text-left text-white-900 dark:text-black-700"
          onClick={() => finishSearchHandler(city)}>
          {city}
        </button>
      ))}
    </div>
  ) : null;
};

export default Search;
