import { createContext, useState } from "react";

export const AdviceSlips = createContext();

export const AdviceProvider = ({ children }) => {
  const [advice, setAdvice] = useState("");
  const [slips, setSlips] = useState([]);

  return (
    <AdviceSlips.Provider value={{ advice, setAdvice, slips, setSlips }}>
      <div className="App container-fluid">{children}</div>
    </AdviceSlips.Provider>
  );
};
