import "./styles.css";
import { AdviceProvider } from "./Provider";
import { Advice, Slips } from "./Advice";

export default function App() {
  return (
    <AdviceProvider>
      <Advice />
      <Slips />
    </AdviceProvider>
  );
}
