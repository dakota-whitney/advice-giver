import { createContext, useState } from "react";

export const AdviceSlips = createContext();

export const AdviceProvider = ({ children }) => {
  let savedSlips = localStorage.getItem("slips");
  savedSlips = savedSlips ? JSON.parse(savedSlips) : [];

  const [advice, setAdvice] = useState("");
  const [slips, setSlips] = useState(savedSlips);

  return (
    <AdviceSlips.Provider value={{ advice, setAdvice, slips, setSlips }}>
      <div className="App container-fluid">{children}</div>
    </AdviceSlips.Provider>
  );
};
