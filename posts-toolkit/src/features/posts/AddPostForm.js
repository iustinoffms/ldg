import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectAllUsers } from "../users/usersSlice";
import { addNewPost } from "./postsSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  const [titleInput, setTitleInput] = useState("");
  const [contentInput, setContentInput] = useState("");
  const [userId, setUserId] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const titleHandler = (e) => {
    setTitleInput(e.target.value);
  };
  const contentHandler = (e) => {
    setContentInput(e.target.value);
  };
  const canSave =
    [titleInput, contentInput, userId].every(Boolean) &&
    addRequestStatus === "idle";

  const onSavePostClick = (e) => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        dispatch(
          addNewPost({
            title: titleInput,
            body: contentInput,
            userId: userId,
          })
        );
        setTitleInput("");
        setContentInput("");
        setUserId("");
      } catch (err) {
        console.log(err);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const onSelectedUser = (e) => {
    setUserId(e.target.value);
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={titleInput}
          onChange={titleHandler}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" value="" onChange={onSelectedUser}>
          <option value=""></option>
          {usersOptions}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={contentInput}
          onChange={contentHandler}
        />
        <button type="button" onClick={onSavePostClick} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  );
};
export default AddPostForm;
