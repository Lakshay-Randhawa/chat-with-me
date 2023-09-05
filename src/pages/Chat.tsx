import { UserSearchBar } from "../components/UserSearchBar";

export const Chat = () => {
  return (
    <div className="flex h-screen p-5">
      <div className="border-r-4 border-black basis-1/5">
        <UserSearchBar />
      </div>
      <div className=" basis-4/5"> Right Side</div>
    </div>
  );
};
