import { useEffect, useState } from "react";
import axios from "axios";
import { useUserStore } from "../store/useUserStore";

type User = {
  id: number;
  name: string;
  // Add more user properties here if needed
};

export const useFetchAllUsers = () => {
  const userStore = useUserStore();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users/all");
        userStore.setAllUsers(response.data);
      } catch (err: any) {}
    };

    fetchUsers();
  }, []);
};
