import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { User } from "types/User";

type Props = {
  name: string;
  profilePic?: string;
  handleSelectUser: (user: string) => void;
};
export const PreviousChatTab = (props: Props) => {
  const { name, handleSelectUser } = props;

  const handleClick = () => {
    handleSelectUser(name);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-green-200 cursor-pointer flex w-[60%] m-auto rounded-xl justify-center gap-5 items-center h-12 hover:bg-green-300"
    >
      <div>
        <AccountCircleIcon />
      </div>
      <div>{name}</div>
    </div>
  );
};
