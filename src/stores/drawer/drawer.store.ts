import { create } from "zustand"
import { DrawerState } from "./type"

export const useDrawerStore = create<DrawerState>()((set) => ({
    isOpen: false,
    setIsOpen: (_isOpen: boolean) => set({ isOpen: _isOpen }), 
}))