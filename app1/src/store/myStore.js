import React, { useState, createContext, useContext } from "react";

const CountContext = createContext([0, () => {}]);

const CountProvider = ({ children }) => {
  return (
    <CountContext.Provider value={useState(0)}>
      {children}
    </CountContext.Provider>
  );
};

const useCount = () => useContext(CountContext);

export { useCount, CountProvider };
