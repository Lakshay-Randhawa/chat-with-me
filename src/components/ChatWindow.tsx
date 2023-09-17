import { IconButton, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useRef } from "react";

type MessageRef = {
  current: {
    value?: string;
  };
};

export const ChatWIindow = () => {
  const messageRef: MessageRef = useRef({});

  const handleSendMessage = () => {
    console.log(messageRef.current.value);
  };

  return (
    <div className="border-black border-2 h-full flex flex-col">
      <div className=" basis-1/12">Chat Info</div>
      <div className="bg-blue-300 basis-10/12">Messages</div>
      <div className=" basis-1/12 bg-green-300 p-1 ">
        <TextField
          className=" bg-white rounded-xl "
          id="message"
          fullWidth
          inputRef={messageRef}
          placeholder="Enter you message here"
          InputProps={{
            endAdornment: (
              <IconButton onClick={handleSendMessage}>
                <SendIcon />
              </IconButton>
            ),
          }}
        />
      </div>
    </div>
  );
};
