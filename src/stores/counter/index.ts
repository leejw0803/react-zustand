import { create } from "zustand";

type CounterState = {
  count: number;
  doubleUp: () => void;
  reset: () => void;
};

const useCountStore = create<CounterState>((set) => ({
  count: 0,
  doubleUp: () => set(({ count }) => ({ count: count + 2 })),
  reset: () => set({ count: 0 }),
}));

export default useCountStore;
