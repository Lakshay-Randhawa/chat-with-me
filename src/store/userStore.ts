import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { User } from "types/User";

type UserStore = {
  allUsers: User[];
  currentUser: User | null;
  setCurrentUser: (newUser: User | null) => void;
  setAllUsers: (newUsers: User[]) => void;
  deleteAllUsers: () => void;
};

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      allUsers: [],
      currentUser: null,
      setCurrentUser: (newUser: User | null) => set({ currentUser: newUser }),
      setAllUsers: (newUsers) => set({ allUsers: newUsers }),
      deleteAllUsers: () => set({ allUsers: [] }),
    }),
    {
      name: "user-storage", // name of item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default the 'localStorage' is used
      partialize: (state) => ({
        currentUser: state.currentUser,
      }), // (optional) only persist a part of the store
    }
  )
);
