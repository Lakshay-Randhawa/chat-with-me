import { useEffect } from "react";
import axios from "axios";
import { useUserStore } from "../store/useUserStore";

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
