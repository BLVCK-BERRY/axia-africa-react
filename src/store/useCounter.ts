import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type CounterStoreType = {
  count1: number;
  count2: number;
  incrementCount1: () => void;
  incrementCount2: () => void;
  decrementCount1: () => void;
  decrementCount2: () => void;
};

const initialState = { count1: 0, count2: 0 };

export const useCounterStore = create<CounterStoreType>()(
  // IDP
  immer(
    devtools(
      persist(
        (set, get) => ({
          ...initialState,
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
        }),
        {
          name: "counter-store",
          storage: createJSONStorage(() => sessionStorage),
        }
      ),
      { enabled: import.meta.env.VITE_ENVIRONMENT === "development" }
    )
  )
);
