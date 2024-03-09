import React, { createContext } from 'react';
import { useState } from 'react';

export const AllContexts = createContext();

function DataContextProvider({ children }) {
  const [index, setIndex] = useState(null);

  return (
    <AllContexts.Provider value={{ index, setIndex }}>
      {children}
    </AllContexts.Provider>
  );
}

export default DataContextProvider;
