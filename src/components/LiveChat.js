import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const [liveMsg, setLiveMsg] = useState();
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("API Polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: `${generateRandomMessage(20)} 🔥`,
        })
      );
    }, 500);

    return () => clearInterval(timer);
    // eslint-disable-next-line
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    dispatch(addMessage({ name: "Shaunak", message: liveMsg }));
    setLiveMsg("");
  };

  return (
    <>
      <div className="overflow-y-scroll w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg flex flex-col-reverse">
        {chatMessages.map((msg, i) => (
          <ChatMessage message={msg.message} name={msg.name} key={i} />
        ))}
      </div>
      <form className="w-full p-2 ml-2" onSubmit={(e) => sendMessage(e)}>
        <input
          className="w-96 border border-black px-2"
          type="text"
          placeholder="Say Something..."
          value={liveMsg}
          onChange={(e) => setLiveMsg(e.target.value)}
        />
        <button className="px-2 mx-2 bg-gray-300">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
