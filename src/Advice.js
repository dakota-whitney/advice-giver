import { useContext } from "react";
import { AdviceDisplay, SlipDisplay } from "./Display";
import { AdviceSlips } from "./Provider";

export const Advice = () => {
  const { advice, setAdvice, setSlips } = useContext(AdviceSlips);

  const handleGetAdvice = async () => {
    const adviceRes = await fetch("https://api.adviceslip.com/advice");
    const { slip } = await adviceRes.json();
    setAdvice(slip.advice);
  };

  const handleSetSlips = () =>
    setSlips((prevSlips) => {
      const slips = prevSlips.includes(advice) ? prevSlips : [...prevSlips, advice];
      localStorage.setItem("slips", JSON.stringify(slips))
      return slips;
    });

  return (
    <AdviceDisplay slip={advice} advice={handleGetAdvice} slips={handleSetSlips} />
  );
};

export const Slips = () => {
  const { slips, setSlips } = useContext(AdviceSlips);

  const handleClearSlips = () => {
    localStorage.clear();
    setSlips([]);
  };

  return (
    <SlipDisplay slips={slips} clear={handleClearSlips} />
  );
};
