import { useEffect } from "react";
import ChatMsg from "./ChatMsg";

function LiveChat() {
  //polling
  useEffect(() => {
    const timer = setInterval(() => {
      //API Polling
    }, 2000);

    //clearing timer
    return () => clearInterval(timer);
  }, []);
  return (
    <div className=" w-full h-[550px] p-2 m-2 border border-gray-300 bg-slate-100 rounded-lg">
      <ChatMsg name="shan" msg="hii" />
    </div>
  );
}

export default LiveChat;
