import { useShallow } from "zustand/shallow";
import { useCounterStore } from "../../store/useCounter";

const Component2 = () => {
  //   const { count2, incrementCount2 } = useCounterStore((state) => state); // causes unnecessary re-renders
  const { count2, incrementCount2 } = useCounterStore(
    useShallow((state) => ({
      count2: state.count2,
      incrementCount2: state.incrementCount2,
    }))
  ); // optimized
  return (
    <div>
      <h1>Component2</h1>
      <p>Count:{count2}</p>
      <p>{Math.random()}</p>
      <button onClick={incrementCount2}>Increment count 2</button>
    </div>
  );
};
export { Component2 };
