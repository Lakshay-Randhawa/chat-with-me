import { ChatWIindow } from "../components/ChatWindow";
import { UserSearchBar } from "../components/UserSearchBar";
import { useFetchAllUsers } from "../hooks/useFetchAllUsers";

export const Chat = () => {
  useFetchAllUsers();

  const RecentChats = ["user1", "user2", "user3", "user4", "user5"];
  return (
    <div className="flex h-full p-5">
      <div className="border-r-4 border-black basis-1/5">
        <UserSearchBar />
        <div className="">
          {RecentChats.map((user, index) => (
            <div key={index} className=" flex  justify-center ">
              {user}
            </div>
          ))}
        </div>
      </div>
      <div className=" basis-4/5 p-4">
        <ChatWIindow />
      </div>
    </div>
  );
};
