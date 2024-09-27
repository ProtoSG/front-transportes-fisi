import { create } from "zustand";

interface ProgressProps {
  progress: number;
  setProgress: (progress: number) => void;
}

export const useProgress = create<ProgressProps>((set) => ({
  progress: 1,
  setProgress: (progress: number) => set(() => ({ progress })),
}))
