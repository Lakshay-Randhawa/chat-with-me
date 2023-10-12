import { IconButton, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useRef, useState } from "react";
import { Message } from "./Message";

type MessageRef = {
  current: {
    value?: string;
  };
};

type Message = {
  message: string;
  isSenderMessage: boolean;
};

type Props = {
  selectUser: string;
};

export const ChatWIindow = (props: Props) => {
  const { selectUser } = props;

  const [messages, setMessages] = useState<Message[]>([]);
  const messageRef: MessageRef = useRef({});

  const handleSendMessage = () => {
    const message = messageRef.current.value;

    if (message) {
      const newMessage: Message = {
        message,
        isSenderMessage: true,
      };

      setMessages((prevMessages) => [...prevMessages, newMessage]);
      messageRef.current.value = "";
    }
  };

  const handleClick = (event: any) => {
    if (event.key === "Enter") handleSendMessage();
  };

  return (
    <div className="border-black border-2 h-full flex flex-col">
      <div className="bg-red-200 basis-1/12">{selectUser}</div>
      <div className="flex flex-col basis-10/12">
        {messages.map((message, index) => (
          <Message
            key={index}
            message={message.message}
            isSenderMessage={message.isSenderMessage}
          />
        ))}
      </div>
      <div className=" basis-1/12 bg-green-300 p-1 ">
        <TextField
          className=" bg-white rounded-xl "
          id="message"
          onKeyDown={handleClick}
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
