import CommentList from "./CommentList";

//COMMENT DATA STRUCTURE:array of objs
const comments = [
  {
    name: "user",
    comment: "This is example comment",
    replies: [],
  },
  {
    name: "shan",
    comment: "this is comment",
    replies: [
      {
        name: "stark",
        comment: "this is reply to shan comment",
        replies: [
          {
            name: "tommy",
            comment: "this is reply to stark comment",
            replies: [
              {
                name: "user",
                comment: "This is example comment",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "timmy",
        comment: "hi",
        replies: [],
      },
    ],
  },

  {
    name: "unknown",
    comment: "nice",
    replies: [],
  },
  {
    name: "tom",
    comment: "hi",
    replies: [],
  },
  {
    name: "tim",
    comment: "hi",
    replies: [],
  },
];

function CommentsContainer() {
  return (
    <div className="mt-5 ml-2 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>

      <CommentList comments={comments} />
    </div>
  );
}

export default CommentsContainer;
