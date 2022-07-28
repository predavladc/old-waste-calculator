import React, { Children, useState, useEffect, useContext } from "react";
import "./index.css";

import { CalcContext } from "./calculationContext";

const Signup = () => {
  const { count, setCount, setLemons, setResults, lemons, results } =
    useContext(CalcContext);

  const handleCountChange = (newValue) => {
    setCount({ value: newValue });
  };
  const handleLemonsChange = (newValue) => {
    setLemons({ value: newValue });
  };
  const handleResultsChange = (newValue) => {
    setResults({ value: newValue });
  };

  return (
    <>
      <h1>SIGNUP {count.value}</h1>
      <button onClick={() => handleCountChange(count.value + 1)}>
        increase {count.value}
      </button>
      <button onClick={() => handleLemonsChange(lemons.value + 1)}>
        increase {lemons.value}
      </button>
      <button onClick={() => handleResultsChange(results.value + 1)}>
        increase {results.value}
      </button>

      <button onClick={() => handleCountChange(count.value - 1)}>
        increase {count.value}
      </button>
      <button onClick={() => handleLemonsChange(lemons.value - 1)}>
        increase {lemons.value}
      </button>
      <button onClick={() => handleResultsChange(results.value - 1)}>
        increase {results.value}
      </button>
    </>
  );
};

export default Signup;
