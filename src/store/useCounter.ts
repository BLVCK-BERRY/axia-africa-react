import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type CounterStoreType = {
  count1: number;
  count2: number;
  name: string;
  age: number;
  actions: {
    incrementCount1: () => void;
    incrementCount2: () => void;
    decrementCount1: () => void;
    decrementCount2: () => void;
  };
};

const initialState = { count1: 0, count2: 0, name: "test", age: 20 };

export const useCounterStore = create<CounterStoreType>()(
  // IDP
  immer(
    devtools(
      persist(
        (set, get) => ({
          ...initialState,
          actions: {
            incrementCount1: () => {
              // set((state) => ({ count1: state.count1 + 1 })); // without immer
              set((state) => {
                state.count1++; // works
              }); // with immer
            },
            incrementCount2: () => {
              set((state) => {
                state.count2 += 3;
              });
            },
            decrementCount1: () => {
              set((state) => {
                state.count1--;
              });
            },
            decrementCount2: () => {
              const count2 = get().count2;
              if (count2 <= 5) return;

              set((state) => {
                state.count2 -= 5;
              });
            },
          },
        }),
        {
          name: "counter-store",
          storage: createJSONStorage(() => sessionStorage),
          // partialize: (state) => ({ count1: state.count1 }),
          partialize: (state) =>
            Object.fromEntries(
              Object.entries(state).filter(
                ([key]) => !["count1", "actions", "name"].includes(key)
              )
            ),
        }
      ),
      { enabled: import.meta.env.VITE_ENVIRONMENT === "development" }
    )
  )
);

export const incrementCount1 = () =>
  useCounterStore.setState((state) => ({ count1: state.count1 + 1 }));
