import { create } from "zustand";

type BearState = {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
};

const useBearStore = create<BearState>((set) => ({
  bears: 0,
  increasePopulation: () => set(({ bears }) => ({ bears: bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

export default useBearStore;
