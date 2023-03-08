import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChatMessage from './ChatMessage';
import { addMessage } from '../utils/chatSlice';
import { generateRandomMessage, generateRandomName } from '../utils/helper';

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log('API Polling');
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: `${generateRandomMessage(20)} 🔥`,
        })
      );
    }, 500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-y-scroll w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg flex flex-col-reverse">
      {chatMessages.map((msg, i) => (
        <ChatMessage message={msg.message} name={msg.name} key={i} />
      ))}
    </div>
  );
};

export default LiveChat;
