// import { useCounterStore } from "../../store/useCounter";
// import { useWeatherStore } from "../../store/useWeatherStore";

import { Component1 } from "./Component1";
import { Component2 } from "./Component2";

type Props = {};
const Zustand = ({}: Props) => {
  // const count1 = useCounterStore((state) => state.count1);
  // const count2 = useCounterStore((state) => state.count2);
  // const incrementCount1 = useCounterStore((state) => state.incrementCount1);
  // const incrementCount2 = useCounterStore((state) => state.incrementCount2);
  // const decrementCount1 = useCounterStore((state) => state.decrementCount1);
  // const decrementCount2 = useCounterStore((state) => state.decrementCount2);

  // const {
  //   count1,
  //   count2,
  //   decrementCount1,
  //   decrementCount2,
  //   incrementCount1,
  //   incrementCount2,
  // } = useCounterStore((state) => state);

  // const fetchWeatherDetails = useWeatherStore(
  //   (state) => state.fetchWeatherDetails
  // );
  // const weatherDetails = useWeatherStore((state) => state.weatherDetails);
  //   console.log(weatherDetails, "weather details fetched");
  return (
    <div style={{ display: "flex", gap: 30 }}>
      <Component1 />
      <Component2 />
      {/* <div s2tyle={{ display: "flex", gap: 10 }}>
        <button onClick={fetchWeatherDetails}>Fetch weather details </button>
        <button onClick={incrementCount1}>Increment the count</button>
        <button onClick={incrementCount2}>Increment count2</button>
        <button onClick={decrementCount1}>Decrement the count</button>
        <button onClick={decrementCount2}>Decrement count2</button>
      </div>
      {weatherDetails?.current.temp_c}

      <p>Count: {count1}</p>
      <p>count2: {count2}</p> */}
    </div>
  );
};
export { Zustand };
