import { createContext, useState, useEffect } from "react";

export const CalcContext = createContext();
const CalcProvider = ({ children }) => {
  const [profile, setProfile] = useState();

  const [electricityFormInfo, setElectricityFormInfo] = useState(
    localStorage.getItem("electricityFormInfo")
      ? JSON.parse(localStorage.getItem("electricityFormInfo"))
      : {
          airconNo: 25,
          airconPower: 2000,
        }
  );
  // const [electricityFormInfo, setElectricityFormInfo] = useState(
  //   localStorage.getItem("electricityFormInfo")
  //     ? JSON.parse(localStorage.getItem("electricityFormInfo"))
  //     : {
  //         airconNo: 25,
  //         airconPower: 2000,
  //       }
  // );
  // const [electricityFormInfo, setElectricityFormInfo] = useState(
  //   localStorage.getItem("electricityFormInfo")
  //     ? JSON.parse(localStorage.getItem("electricityFormInfo"))
  //     : {
  //         airconNo: 25,
  //         airconPower: 2000,
  //       }
  // );
  // const [electricityFormInfo, setElectricityFormInfo] = useState(
  //   localStorage.getItem("electricityFormInfo")
  //     ? JSON.parse(localStorage.getItem("electricityFormInfo"))
  //     : {
  //         airconNo: 25,
  //         airconPower: 2000,
  //       }
  // );

  //Stores all calculation results in the profile
  useEffect(() => {
    localStorage.setItem(
      `profile`,
      JSON.stringify({
        electricityFormInfo,
        // electricityFormInfo,
        // electricityFormInfo,
        // electricityFormInfo,
        // electricityFormInfo,
      })
    );
  }, [
    electricityFormInfo,
    // electricityFormInfo,
    // electricityFormInfo,
    // electricityFormInfo,
    // electricityFormInfo,
  ]);

  //my stuff is up

  const [count, setCount] = useState(
    JSON.parse(localStorage.getItem("waste-app-count")) || { value: 44444 }
  );

  // useEffect(() => {
  //   localStorage.setItem(`waste-app-count`, JSON.stringify(count));
  // }, [count]);

  const persistToLS = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  return (
    <CalcContext.Provider
      value={{
        electricityFormInfo,
        setElectricityFormInfo,
        persistToLS,
      }}
    >
      {children}
    </CalcContext.Provider>
  );
};

export default CalcProvider;
