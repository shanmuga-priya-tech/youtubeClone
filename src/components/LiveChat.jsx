import { useEffect, useState } from "react";
import ChatMsg from "./ChatMsg";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomStrings } from "../utils/helper";

function LiveChat() {
  const [livemsg, setLivemsg] = useState("");
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
    }, 2000);

    //clearing timer
    return () => clearInterval(timer);
  }, [dispatch]);

  return (
    <>
      <div className=" w-full h-[500px] p-2 m-2 border border-gray-300 bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMsgs.map((chat, i) => (
          <ChatMsg key={i} name={chat.name} msg={chat.message} />
        ))}
      </div>
      <form
        className="w-full p-2 "
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "shan",
              message: livemsg,
            })
          );
          setLivemsg("");
        }}
      >
        <input
          className="border border-black p-2 w-[17rem] rounded-lg "
          type="text"
          placeholder="Message"
          value={livemsg}
          onChange={(e) => setLivemsg(e.target.value)}
        />
        <button className="py-2 px-4 mx-2  bg-red-600 rounded-lg  text-white">
          Send
        </button>
      </form>
    </>
  );
}

export default LiveChat;
