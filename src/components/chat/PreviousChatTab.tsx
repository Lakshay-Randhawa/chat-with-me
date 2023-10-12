import AccountCircleIcon from "@mui/icons-material/AccountCircle";

type Props = {
  name: string;
  profilePic?: string;
};
export const PreviousChatTab = (props: Props) => {
  const { name } = props;
  return (
    <div className=" bg-green-200 cursor-pointer flex w-[60%] m-auto rounded-xl justify-center gap-5 items-center h-12">
      <div>
        <AccountCircleIcon />
      </div>
      <div>{name}</div>
    </div>
  );
};
