import { create } from "zustand";
import { VisibilityStoreState } from "./type";

export const useVisibilityStore = create<VisibilityStoreState>()((set) => ({
    visibility: false,
    setVisibility: () => set((state) => ({ visibility: !state.visibility }))
})) 