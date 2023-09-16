import { ChatWIindow } from "../components/ChatWindow";
import { UserSearchBar } from "../components/UserSearchBar";
import { useFetchAllUsers } from "../hooks/useFetchAllUsers";

export const Chat = () => {
  useFetchAllUsers();

  return (
    <div className="flex h-full p-5">
      <div className="border-r-4 border-black basis-1/5">
        <UserSearchBar />
      </div>
      <div className=" basis-4/5 p-4">
        <ChatWIindow />
      </div>
    </div>
  );
};
