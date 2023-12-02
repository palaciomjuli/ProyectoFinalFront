import { createContext, useMemo, useReducer } from 'react';
import { globalReducer } from './globalReducer';

export const initialState = {
  isFetching: false,
  isDarkMode: true,
  data: [],
  favorites: JSON.parse(localStorage.getItem('odontoFavorites')) || [],
};

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(globalReducer, initialState);
  const value = useMemo(() => [state, dispatch], [state]);

  return <ContextGlobal.Provider value={value}>{children}</ContextGlobal.Provider>;
};
