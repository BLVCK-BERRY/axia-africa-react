import { useShallow } from "zustand/shallow";
import { incrementCount1, useCounterStore } from "../../store/useCounter";
// import { useEffect } from "react";

// const count1 = useCounterStore.getState().count1; // no reaction

// const resetState = () => {
//   useCounterStore.setState({ count1: 0, count2: 0 });
// };

const Component1 = () => {
  const { count1, incrementCount1 } = useCounterStore(
    useShallow((state) => ({
      count1: state.count1,
      incrementCount1: state.actions.incrementCount1,
    }))
  );

  //   useEffect(() => {
  //     useCounterStore.setState({ count1: 100, count2: 79 });
  //   }, []);

  return (
    <div>
      <h1>Component1</h1>
      <p>Count:{count1}</p>
      <p>{Math.random()}</p>
      <button onClick={incrementCount1}>Increment count 1</button>
      {/* <button onClick={resetState}>Reset</button> */}
    </div>
  );
};
export { Component1 };
