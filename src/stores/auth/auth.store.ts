import { create } from "zustand";
import { VisibilityStoreState } from "./type";

export const useVisibilityStore = create<VisibilityStoreState>()((set) => ({
    visibility: false,
    newVisibility: false,
    confirmVisibility: false,
    setVisibility: () => set((state) => ({ visibility: !state.visibility })),
    setNewVisibility: () => set((state) => ({ newVisibility: !state.newVisibility })),
    setConfirmVisibility: () => set((state) => ({ confirmVisibility: !state.confirmVisibility }))
})) 