import React, { useState, useContext } from "react";

const AppContext = React.createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export default function AppProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const [terminals, setTerminals] = useState([
    {
      id: 1,
      terminalTitle: "title 1",
      description: "desc 1",
    },
  ]);

  const changeUserData = (data) => {
    setUserData(data);
  };

  const addTerminal = (data) => {
    setTerminals([...terminals, data]);
  };

  const removeTerminal = (id) => {
    console.log(id);
    // setTerminals([...terminals, data]);
  };

  return (
    <AppContext.Provider
      value={{
        userData,
        terminals,
        changeUserData,
        addTerminal,
        removeTerminal
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
