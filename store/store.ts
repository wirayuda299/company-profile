import { create } from "zustand";

type MenuModalState = {
  isMenuModalOpen: boolean;
  toggleMenuModal: () => void;
}
type SelectedTab = {
  selectedTab:string
  setSelectedTab: (val:string) => void
}
export const useMenuModalStore = create<MenuModalState>((set) => ({
  isMenuModalOpen: false,
  toggleMenuModal: () => set((state) => ({ isMenuModalOpen: !state.isMenuModalOpen })),
}));

export const useSelectedTabStore = create<SelectedTab>((set) => ({
  selectedTab: "overview",
  setSelectedTab: (val) => set((state) => ({ selectedTab: val })),
}));
