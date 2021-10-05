import clsx from 'clsx';
import Searchbar from 'components/Searchbar';
import type { NextPage } from 'next';
import { useTheme } from 'next-themes';
import React, { useCallback, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { HiMoon, HiSun } from 'react-icons/hi';
import useSound from 'use-sound';

import useHeaderVisible from './libs/useHeaderVisible';

enum Themes {
  light = 'light',
  dark = 'dark',
}

const Header: NextPage = () => {
  const [playOnDark] = useSound('/sounds/dark-on.mp3');
  const [playOnLight] = useSound('/sounds/light-on.mp3');
  const visible = useHeaderVisible();
  const { theme, setTheme } = useTheme();
  const [search, setSearch] = useState(false);

  const toggleTheme = useCallback(() => {
    if (theme === Themes.light) {
      playOnLight();
    } else {
      playOnDark();
    }

    setTheme(theme === Themes.light ? Themes.dark : Themes.light);
  }, [setTheme, theme, playOnDark, playOnLight]);

  return (
    <>
      <Searchbar show={search} closeSearch={() => setSearch(false)} />
      <div
        className={clsx(
          'sticky z-20 w-full opacity-90 bg-lightTheme dark:bg-darkTheme transition-top duration-300',
          visible ? 'top-0' : '-top-28'
        )}>
        <div className=" flex items-center justify-between p-5 md:p-9 text-black-900 dark:text-white-900">
          <button
            className="flex items-center justify-center w-auto h-12 text-2xl text-gray-900 dark:text-pink transition-transform duration-300 ease-in-out transform hover:scale-110"
            onClick={() => setSearch(true)}>
            <BiSearch className="inline w-6 h-6 mr-2" />
            Search
          </button>
          <button
            className="w-12 h-12 rounded-md dark:bg-gray-900 bg-pink focus:outline-none focus:ring-2 ring-blue-700"
            onClick={toggleTheme}>
            {theme === Themes.light ? <HiMoon className="inline w-6 h-6 ml-1" /> : <HiSun className="inline w-6 h-6" />}
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
