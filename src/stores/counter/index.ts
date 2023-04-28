import { create } from "zustand";

type CounterState = {
  count: number;
  rerenderTrigger: boolean;
  doubleUp: () => void;
  reset: () => void;
  setTrigger: () => void;
  deleteAll: () => void;
};

const useCountStore = create<CounterState>((set) => ({
  count: 0,
  rerenderTrigger: false,
  doubleUp: () => set(({ count }) => ({ count: count + 2 })),
  reset: () => set({ count: 0 }),
  setTrigger: () =>
    set(({ rerenderTrigger }) => ({
      rerenderTrigger: !rerenderTrigger,
    })),
  deleteAll: () => set({}, true),
}));

export default useCountStore;
