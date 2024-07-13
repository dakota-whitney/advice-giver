import "./styles.css";
import { AdviceProvider } from "./Provider";
import { Advice } from "./Advice";
import { Slips } from "./Display";

export default function App() {
  return (
    <AdviceProvider>
      <Advice />
      <Slips />
    </AdviceProvider>
  );
}
