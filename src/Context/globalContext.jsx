import { useState, createContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [addNewMode, setAddNewMode] = useState(false);
  return (
    <GlobalContext.Provider value={{ addNewMode, setAddNewMode }}>
      {children}
    </GlobalContext.Provider>
  );
};
