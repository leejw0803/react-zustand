import { create } from "zustand";

type BearIndexState = {
  currentBear: number;
  setCurrentBear: (index: number) => void;
};

const useBearIndexStore = create<BearIndexState>((set) => ({
  currentBear: 0,
  setCurrentBear: (index: number) => set(() => ({ currentBear: index })),
}));

export default useBearIndexStore;
