import { useEffect } from "react";
import ChatMsg from "./ChatMsg";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomStrings } from "../utils/helper";

function LiveChat() {
  const dispatch = useDispatch();
  const chatMsgs = useSelector((store) => store.chat.messages);

  //polling
  useEffect(() => {
    const timer = setInterval(() => {
      //API Polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomStrings(20) + "🚀",
        })
      );
    }, 1000);

    //clearing timer
    return () => clearInterval(timer);
  }, [dispatch]);
  return (
    <div className=" w-full h-[550px] p-2 m-2 border border-gray-300 bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
      {chatMsgs.map((chat, i) => (
        <ChatMsg key={i} name={chat.name} msg={chat.message} />
      ))}
    </div>
  );
}

export default LiveChat;
