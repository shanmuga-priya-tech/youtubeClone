import Comment from "./Comment";

function CommentList({ comments }) {
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.name}>
          <Comment data={comment} />
          <div className="pl-5 ml-5 border border-l-black">
            <CommentList comments={comment.replies} />{" "}
            {/**replies are again the list of comments so we are again passing the comment list itself inside it recursively to loop through the replies */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentList;
