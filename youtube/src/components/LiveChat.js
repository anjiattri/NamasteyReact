import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helpers";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //api polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: "hi " + generateRandomMessage(20),
        })
      );
    }, 2000);

    return () => {
      clearInterval(i);
    };
  }, []);
  return (
    <div>
      <div className="ml-2 p-2 border border-black w-full h-[600px] bg-gray-100 rounded-lg overflow-y-scroll  flex flex-col-reverse">
        {chatMessages.map((chat, index) => {
          return (
            <ChatMessage key={index} name={chat.name} message={chat.message} />
          );
        })}
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({ name: "Anjali", message: liveMessage }));
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className="w-96"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-700 text-white rounded-sm ">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
