import { useState } from "react";
import { ChatWIindow } from "../components/chat/ChatWindow";
import { PreviousChatTab } from "../components/chat/PreviousChatTab";
import { UserSearchBar } from "../components/chat/UserSearchBar";
import { useFetchAllUsers } from "../hooks/useFetchAllUsers";
import { User } from "types/User";

export const Chat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useFetchAllUsers();
  const RecentChats = ["user1", "user2", "user3", "user4", "user5"];
  return (
    <div className="flex h-full p-5">
      <div className="border-r-4 border-black basis-1/5">
        <UserSearchBar />
        <div className="flex flex-col gap-3 p-6">
          {RecentChats.map((user, index) => (
            <PreviousChatTab key={index} name={user} />
          ))}
        </div>
      </div>
      <div className=" basis-4/5 p-4">
        {isChatOpen ? <ChatWIindow /> : <div>Click on a user to chat</div>}
      </div>
    </div>
  );
};
