import { ChatWIindow } from "../components/chat/ChatWindow";
import { PreviousChatTab } from "../components/chat/PreviousChatTab";
import { UserSearchBar } from "../components/chat/UserSearchBar";
import { useFetchAllUsers } from "../hooks/useFetchAllUsers";

export const Chat = () => {
  useFetchAllUsers();

  const RecentChats = ["user1", "user2", "user3", "user4", "user5"];
  return (
    <div className="flex h-full p-5">
      <div className="border-r-4 border-black basis-1/5">
        <UserSearchBar />
        <div className="flex flex-col gap-3 p-6">
          {RecentChats.map((user, index) => (
            // <div key={index} className=" flex  justify-center ">
            //   {user}
            // </div>
            <PreviousChatTab key={index} name={user} />
          ))}
        </div>
      </div>
      <div className=" basis-4/5 p-4">
        <ChatWIindow />
      </div>
    </div>
  );
};
