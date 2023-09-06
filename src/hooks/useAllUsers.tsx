import axios from "axios";
import { useEffect, useState } from "react";
import { useUserStore } from "../store/useUserStore";

export const useAllUsers = () => {
  const userStore = useUserStore() as any;

  const getAllUsers = async () => {
    const users = await axios.get("http://localhost:5000/users/all");
    userStore.setUser(users.data);
  };

  useEffect(() => {
    getAllUsers();
  }, []);
};
