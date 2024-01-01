import { create } from "zustand";
import { User } from "types/User";

type UserStore = {
  allUsers: User[];
  currentUser: User | null;
  setCurrentUser: (newUser: User) => void;
  setAllUsers: (newUsers: User[]) => void;
  deleteAllUsers: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  allUsers: [],
  currentUser: null,
  setCurrentUser: (newUser: User) => set({ currentUser: newUser }),
  setAllUsers: (newUsers) => set({ allUsers: newUsers }),
  deleteAllUsers: () => set({ allUsers: [] }),
}));
