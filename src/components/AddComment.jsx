import "../styles/componentStyles/AddComment.css";

function AddComment() {
  return (
    <div className="add-comment">
      <img
        className="add-comment-avatar"
        src="/images/avatars/image-juliusomo.png"
      />
      <textarea
        name="commentText"
        id="comment-text"
        rows={"3"}
        placeholder="Add a comment..."
      ></textarea>
      <button id="submit-comment">send</button>
    </div>
  );
}

export default AddComment;
