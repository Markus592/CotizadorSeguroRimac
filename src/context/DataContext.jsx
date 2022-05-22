import React, { useState } from "react";

const DataContext = React.createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState([]);

  return (
    <DataContext.Provider value={{ user, setUser }}>{children}</DataContext.Provider>
  );
}

export default DataContext;
