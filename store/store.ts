import { create } from "zustand";

type MenuModalState = {
  isMenuModalOpen: boolean;
  toggleMenuModal: () => void;
}
export const useMenuModalStore = create<MenuModalState>((set) => ({
  isMenuModalOpen: false,
  toggleMenuModal: () => set((state) => ({ isMenuModalOpen: !state.isMenuModalOpen })),
}));