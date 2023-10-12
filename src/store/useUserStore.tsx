import { create } from "zustand";
import { User } from "types/User";

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
