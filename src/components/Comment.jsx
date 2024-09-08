function Comment({ data }) {
  const { name, comment, replies } = data;
  return (
    <div className="flex items-center  shadow-sm bg-gray-100 rounded-lg p-2 my-2">
      <img
        className="w-8 h-8"
        src="https://cdn-icons-png.flaticon.com/128/64/64572.png"
        alt="user-img"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{comment}</p>
        {/* <p>{replies}</p> */}
      </div>
    </div>
  );
}

export default Comment;
