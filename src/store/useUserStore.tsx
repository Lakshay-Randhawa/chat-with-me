import { create } from "zustand";

type User = {
  id: string;
  name: string;
  email: string;
};

export const useUserStore = create((set) => ({
  users: [] as User[],
  addUsers: (users: any) => set({ users }),
}));
