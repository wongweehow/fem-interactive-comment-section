import CommentCard from "./components/CommentCard";
import AddComment from "./components/AddComment";
import "./styles/App.css";

function App() {
  return (
    <div className="dev-container">
      <div className="container">
        <div className="comment-section">
          <CommentCard />
        </div>
        <br />
        <AddComment />
      </div>

      <div id="delete-dialog">
        <h3>Delete comment</h3>
        <p>
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </p>
        <div className="dialog-btn">
          <button className="dialog-btn-cancel">no, cancel</button>
          <button className="dialog-btn-delete">yes, delete</button>
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
}

export default App;