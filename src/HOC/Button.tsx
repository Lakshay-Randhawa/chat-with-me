import { Button } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

export const HowerButton = (props: Props) => {
  const { children } = props;

  return (
    <Button
      className="text-black hover:text-white"
      type="submit"
      variant="contained"
      size="small"
    >
      {children}
    </Button>
  );
};
