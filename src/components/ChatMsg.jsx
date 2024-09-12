import { USER_ICON } from "../utils/constants";

function ChatMsg({ name, msg }) {
  return (
    <div className="flex gap-2 items-center shadow-sm p-2">
      <img className="w-6 " src={USER_ICON} alt="user-icon" />
      <span className="font-bold">{name}</span>
      <span>{msg}</span>
    </div>
  );
}

export default ChatMsg;
