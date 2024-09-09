function ChatMsg({ name, msg }) {
  return (
    <div className="flex gap-2 items-center shadow-sm p-2">
      <img
        className="w-6 "
        src="https://cdn-icons-png.flaticon.com/128/64/64572.png"
        alt="user-icon"
      />
      <span className="font-bold">{name}</span>
      <span>{msg}</span>
    </div>
  );
}

export default ChatMsg;
