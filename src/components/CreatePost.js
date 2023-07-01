import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";
import './createPost.css'
const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();
  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="create-post-form">
      <h1>Create A Post</h1>
      <div className="form">
      <div className="label-input">
        <label>Title</label>
        <input
          value={title}
          placeholder="Enter the Title ..."
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div className="label-input">
        <label>Description</label>
        <textarea
          value={postText}
          onChange={(e) => {
            setPostText(e.target.value);
          }}
          placeholder="Enter the content..."
        />
      </div>
      <button onClick={createPost}>Create Post</button>
      </div>
    </div>
  );
};

export default CreatePost;
