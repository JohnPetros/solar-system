import { createContext, useState } from 'react';

export const PlanetsContext = createContext();

export function PlanetsContextProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  return (
    <PlanetsContext.Provider value={[planets, setPlanets]}>
      {children}
    </PlanetsContext.Provider>
  );
}
