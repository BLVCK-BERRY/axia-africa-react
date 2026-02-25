import { memo, useCallback, useMemo, useState } from "react";

const Optimization = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // useCallback memoizes the function reference and not the result
  const handleIncrementCounter1 = useCallback(() => {
    setCounter((prev) => (prev >= 100 ? prev : prev + 1));
  }, []);

  const handleDecrementCounter1 = useCallback(() => {
    setCounter((prev) => (prev === 0 ? prev : prev - 1));
  }, []);

  // useMemo memoizes the function result and not the function reference

  const handleCalculateLargeValue = useMemo(() => {
    for (let i = 0; i < 1000 * counter2; i++) {
      // assume this is a very expensive computation
      console.log("This is the round: ", i);
    }
    return "done";
  }, [counter2]);

  return (
    <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div>Optimization techniques</div>
      <MemoChild
        // counter={counter}
        handleIncrementCounter={handleIncrementCounter1}
        handleDecrementCounter={handleDecrementCounter1}
      />

      {[0, 1, 1, 3].map((item, index) => (
        <p key={index}>{item}</p>
      ))}

      <p style={{ fontWeight: 700, fontSize: 30 }}>Counter 1: {counter}</p>
      <p style={{ fontWeight: 700, fontSize: 30 }}>Counter 2: {counter2}</p>

      {/* <div style={{ display: "flex", gap: 10 }}>
        <p>Counter 1</p>
        <button onClick={handleIncrementCounter1}>Increment</button>
        <button onClick={handleDecrementCounter1}>Decrement</button>
      </div> */}
      {/* <div style={{ display: "flex", gap: 10 }}>
        <p>Counter 2</p>
        <button onClick={() => setCounter2((prev) => prev + 1)}>
          Increment counter 2
        </button>
        <button onClick={() => setCounter2((prev) => prev - 1)}>
          Decrement counter 2
        </button>
      </div> */}

      {/* <button onClick={handleCalculateLargeValue}>Compute Large Value</button> */}

      <p>{handleCalculateLargeValue}</p>
      {/* <LongComputationComponent /> */}
    </section>
  );
};

export { Optimization };

const MemoChild = memo(
  ({
    // counter,
    handleIncrementCounter,
    handleDecrementCounter,
  }: {
    // counter: number;
    handleIncrementCounter: () => void;
    handleDecrementCounter: () => void;
  }) => {
    console.log("memo child rendered!");
    return (
      <div>
        <p>This is the memo child</p>
        <div style={{ display: "flex", gap: 10 }}>
          <p>Memo counter buttons</p>
          <button onClick={handleIncrementCounter}>Increment</button>
          <button onClick={handleDecrementCounter}>Decrement</button>
        </div>
      </div>
    );
  },
);

// const LongComputationComponent = () => {
//   const [message, setMessage] = useState(
//     "Click the button to start the computation",
//   );

//   const performLongTask = () => {
//     setMessage("Calculating... UI will freeze now for ~10 seconds");
//     const start = performance.now();

//     // The blocking computation starts here
//     calculatePrimes(5000000000); // This number might need adjustment to reach exactly 10s on your CPU

//     const end = performance.now();
//     setMessage(
//       `Finished calculation in ${(end - start).toFixed(2)}ms. The UI was blocked during this time.`,
//     );
//   };

//   // Synchronous, CPU-intensive function
//   const calculatePrimes = (iterations: number) => {
//     const primes = [];
//     for (let i = 0; i < iterations; i++) {
//       let candidate = i * 1000 + 2; // Example logic to increase magnitude
//       let isPrime = true;
//       for (let j = 2; j <= Math.sqrt(candidate); j++) {
//         if (candidate % j === 0) {
//           isPrime = false;
//           break;
//         }
//       }
//       if (isPrime) {
//         primes.push(candidate);
//       }
//     }
//     return primes;
//   };

//   return (
//     <div>
//       <p>{message}</p>
//       {/* This button will be unresponsive while the calculation runs */}
//       <button onClick={performLongTask}>Run Blocking Computation</button>
//       <p>
//         Try clicking, scrolling, or interacting with other parts of the page
//         while the calculation is running. They will not respond until it is
//         finished.
//       </p>
//     </div>
//   );
// };

// export default LongComputationComponent;
