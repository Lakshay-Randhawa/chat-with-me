import { Box } from "@mui/material";

type Props = {
  message: string;
  isSenderMessage: boolean;
};

export const Message = (props: Props) => {
  const { message, isSenderMessage } = props;

  return (
    <Box component="span" className="border-2 flex justify-end p-2">
      {message}
    </Box>
  );
};
