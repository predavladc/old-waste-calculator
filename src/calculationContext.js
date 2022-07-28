import { createContext, useState, useEffect } from "react";

export const CalcContext = createContext();
const CalcProvider = ({ children }) => {
  const [count, setCount] = useState(
    JSON.parse(localStorage.getItem("waste-app-count")) || { value: 44444 }
  );
  const [lemons, setLemons] = useState(
    JSON.parse(localStorage.getItem("waste-app-lemons")) || { value: 44444 }
  );
  const [results, setResults] = useState(
    JSON.parse(localStorage.getItem("waste-app-results")) || { value: 44444 }
  );

  useEffect(() => {
    localStorage.setItem(`waste-app-count`, JSON.stringify(count));
  }, [count]);

  useEffect(() => {
    localStorage.setItem(`waste-app-lemons`, JSON.stringify(lemons));
  }, [lemons]);

  useEffect(() => {
    localStorage.setItem(`waste-app-results`, JSON.stringify(results));
  }, [results]);

  const calcLemons = () => {
    return Math.random();
  };
  return (
    <CalcContext.Provider
      value={{
        count,
        setCount,
        lemons,
        setLemons,
        calcLemons,
        results,
        setResults,
      }}
    >
      {children}
    </CalcContext.Provider>
  );
};

export default CalcProvider;
