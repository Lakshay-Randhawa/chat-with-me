import { create } from "zustand";

type User = {
  id: number;
  name: string;
  // Add more user properties here if needed
};

type UserStore = {
  users: User[];
  setAllUsers: (newUsers: User[]) => void;
  deleteAllUsers: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  users: [],
  setAllUsers: (newUsers) => set({ users: newUsers }),
  deleteAllUsers: () => set({ users: [] }),
}));
