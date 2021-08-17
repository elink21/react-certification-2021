import React, { useState, createContext, useEffect } from 'react';

export default ({ children }) => {
  const [globalState, setGlobalState] = useState({
    theme: 'light',
    searchTerm: 'wizeline',
  });

  
  return (
    <AppContext.Provider value={[globalState, setGlobalState]}>
      {children}
    </AppContext.Provider>
  );
};

export const AppContext = createContext();
