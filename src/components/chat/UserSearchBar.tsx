import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Search } from "@mui/icons-material";
import { useUserStore } from "../../store/useUserStore";
import { User } from "types/User";

export const UserSearchBar = () => {
  const [searchResults, setSearchResults] = useState<User[]>([]);

  const { users } = useUserStore();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;

    const foundUsers = searchUsers(searchTerm);
    setSearchResults(foundUsers);
  };

  const searchUsers = (term: string) => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(term.toLowerCase())
    );
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
