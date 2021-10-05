import contextType from 'definitions/contextType';
import useLocalStorage from 'hooks/useLocalStorage';
import type { NextPage } from 'next';
import { createContext, useContext as useReactContext, useState } from 'react';

import Props from './props';

const Context = createContext({});

export const useContext = (): contextType => {
  return useReactContext(Context) as contextType;
};

export const ContextProvider: NextPage<Props> = ({ children }: Props) => {
  const [currentCity, setCurrentCity] = useLocalStorage('cityData', null);

  const value = {
    currentCity,
    setCurrentCity,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
