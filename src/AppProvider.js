import React, { useState, useContext } from "react";

const AppContext = React.createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export default function AppProvider({ children }) {
  const [userData, setUserData] = useState(null);

  const changeUserData = (data) => {
    setUserData(data);
  };

  return (
    <AppContext.Provider
      value={{
        userData,
        changeUserData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
