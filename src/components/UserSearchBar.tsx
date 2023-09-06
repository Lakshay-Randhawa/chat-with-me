import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Search } from "@mui/icons-material";
import { useAllUsers } from "../hooks/useAllUsers";
import { useUserStore } from "../store/useUserStore";

type User = {
  id: number;
  name: string;
  email: string;
};

export const UserSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<User[]>([]);

  const users = useAllUsers();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

    // const foundUsers = mockSearchUsers(newSearchTerm);
    // setSearchResults(foundUsers);
  };

  const mockSearchUsers = (term: string) => {
    // return users.filter((user) =>
    //   user.name.toLowerCase().includes(term.toLowerCase())
    // );
  };

  return (
    <Autocomplete
      className="w-10/12 mx-auto"
      id="user-search"
      options={searchResults}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search for Users"
          variant="outlined"
          fullWidth
          onChange={handleSearchChange}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <>
                <Search />
                {params.InputProps.startAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};
