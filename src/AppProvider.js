import React, { useState, useContext } from "react";

const AppContext = React.createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export default function AppProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const [terminals, setTerminals] = useState([]);
  const [buyers] = useState([
    {
      id: 1,
      name: "Leanne Graham",
      averageCheck: 900,
      numberOfPurchases: 100,
      totalRevenues: 1000,
    },
    {
      id: 2,
      name: "Ervin Howell",
      averageCheck: 463,
      numberOfPurchases: 5634,
      totalRevenues: 5345,
    },
    {
      id: 3,
      name: "Clementine Bauch",
      averageCheck: 8768,
      numberOfPurchases: 231,
      totalRevenues: 100,
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      averageCheck: 945,
      numberOfPurchases: 248,
      totalRevenues: 11,
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      averageCheck: 8256,
      numberOfPurchases: 571,
      totalRevenues: 3753,
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      averageCheck: 7589,
      numberOfPurchases: 147,
      totalRevenues: 3578,
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      averageCheck: 957,
      numberOfPurchases: 445,
      totalRevenues: 7215,
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      averageCheck: 7225,
      numberOfPurchases: 4445,
      totalRevenues: 6897,
    },
    {
      id: 9,
      name: "Glenna Reichert",
      averageCheck: 7245,
      numberOfPurchases: 4512,
      totalRevenues: 3785,
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      averageCheck: 785,
      numberOfPurchases: 245,
      totalRevenues: 2784,
    },
    {
      id: 11,
      name: "Mrs. Dennis Schulist",
      averageCheck: 45782,
      numberOfPurchases: 75678,
      totalRevenues: 722,
    },
    {
      id: 12,
      name: "Clementine Bauch",
      averageCheck: 278,
      numberOfPurchases: 4124,
      totalRevenues: 2587,
    },
    {
      id: 13,
      name: "Leanne Graham",
      averageCheck: 5347,
      numberOfPurchases: 7895,
      totalRevenues: 573,
    },
    {
      id: 14,
      name: "Leanne Graham",
      averageCheck: 759,
      numberOfPurchases: 725,
      totalRevenues: 27,
    },
    {
      id: 15,
      name: "Glenna Reichert",
      averageCheck: 2777,
      numberOfPurchases: 2570,
      totalRevenues: 1459,
    },
  ]);

  const changeUserData = (data) => {
    setUserData(data);
  };

  const addTerminal = (data) => {
    setTerminals([...terminals, data]);
  };

  const removeTerminal = (id) => {
    setTerminals(terminals.filter((item) => item.id !== id));
  };

  return (
    <AppContext.Provider
      value={{
        userData,
        terminals,
        buyers,
        changeUserData,
        addTerminal,
        removeTerminal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
