import { create } from "zustand";

type BearState = {
  bears: number;
  bearInfo: string[];
  increasePopulation: () => void;
  removeAllBears: () => void;
};

const useBearStore = create<BearState>((set) => ({
  bears: 0,
  bearInfo: ["Dudo", "Danny", "Jay"],
  increasePopulation: () => set(({ bears }) => ({ bears: bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

export default useBearStore;
