import { useState } from "react";
import { ChatWIindow } from "./ChatWindow";
import { PreviousChatTab } from "./PreviousChatTab";
import { UserSearchBar } from "./UserSearchBar";
import { useFetchAllUsers } from "../../hooks/useFetchAllUsers";

export const Chat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const handleSelectUser = (user: string) => {
    setIsChatOpen(true);
    setSelectedUser(user);
  };

  useFetchAllUsers();
  const RecentChats = ["user 1", "user 2", "user 3", "user 4", "user 5"];
  return (
    <div className="flex h-full p-5">
      <div className="border-r-4 border-black basis-1/5">
        <UserSearchBar />
        <div className="flex flex-col gap-3 p-6">
          {RecentChats.map((user, index) => (
            <PreviousChatTab
              handleSelectUser={handleSelectUser}
              key={index}
              name={user}
            />
          ))}
        </div>
      </div>
      <div className=" basis-4/5 p-4">
        {isChatOpen && selectedUser ? (
          <ChatWIindow selectUser={selectedUser} />
        ) : (
          <div>Click on a user to chat</div>
        )}
      </div>
    </div>
  );
};
