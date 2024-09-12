import { USER_ICON } from "../utils/constants";

function Comment({ data }) {
  const { name, comment } = data;
  return (
    <div className="flex items-center  shadow-sm bg-gray-100 rounded-lg p-2 my-2">
      <img className="w-8 h-8" src={USER_ICON} alt="user-img" />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{comment}</p>
      </div>
    </div>
  );
}

export default Comment;
