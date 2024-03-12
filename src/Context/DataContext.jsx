import React, { createContext } from 'react';
import { useState } from 'react';

export const AllContexts = createContext();

function DataContextProvider({ children }) {
  const [index, setIndex] = useState(null);
  const [sanityData, setSanityData] = useState([]);

  return (
    <AllContexts.Provider
      value={{ index, setIndex, sanityData, setSanityData }}
    >
      {children}
    </AllContexts.Provider>
  );
}

export default DataContextProvider;
