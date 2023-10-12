import { Box } from "@mui/material";

type Props = {
  message: string;
  isSenderMessage: boolean;
};

export const Message = (props: Props) => {
  const { message, isSenderMessage } = props;

  const messageStyle = `border-2 p-2 rounded-xl flex ${
    isSenderMessage ? "justify-end" : "justify-start"
  }`;
  return (
    <Box component="span" className={messageStyle}>
      {message}
    </Box>
  );
};
