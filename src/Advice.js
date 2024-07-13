import { useContext } from "react";
import { Display } from "./Display";
import { AdviceSlips } from "./Provider";

export const Advice = () => {
  const { advice, setAdvice, setSlips } = useContext(AdviceSlips);

  const handleGetAdvice = async ({ target }) => {
    const adviceRes = await fetch("https://api.adviceslip.com/advice");
    const { slip } = await adviceRes.json();
    setAdvice(slip.advice);
  };

  const handleSetSlips = () =>
    setSlips((prevSlips) => {
      return prevSlips.includes(advice) ? prevSlips : [...prevSlips, advice];
    });

  return (
    <Display slip={advice} advice={handleGetAdvice} slips={handleSetSlips} />
  );
};
