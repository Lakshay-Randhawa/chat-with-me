import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Search } from "@mui/icons-material";

type User = {
  id: number;
  name: string;
};

export const UserSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<User[]>([]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

    // Here, you can make an API call to search for users in the database
    // and update the searchResults state with the found users.
    // For the sake of simplicity, we'll use a mock function.
    const foundUsers = mockSearchUsers(newSearchTerm);
    setSearchResults(foundUsers);
  };

  const mockSearchUsers = (term: string): User[] => {
    // This is a mock function; replace it with your actual API call.
    // For demonstration, we'll return an array of User objects.
    const mockUsers: User[] = [
      { id: 1, name: "User 1" },
      { id: 2, name: "User 2" },
      { id: 3, name: "User 3" },
    ];

    return mockUsers.filter((user) =>
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
