import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

interface User {
  id: number;
  name: string;
  // Add more user properties here if needed
}

export const useAllUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<User[]> = await axios.get(
          "http://localhost:5000/users/all"
        );
        setUsers(response.data);
      } catch (err: any) {}
    };

    fetchData();
  }, []);

  return users;
};
