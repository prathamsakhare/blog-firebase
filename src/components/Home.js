import React, { useEffect, useState } from "react";
import { collection, deleteDoc, getDocs, doc } from "firebase/firestore";
import { db } from "../firebase";
import "./home.css";
import Loader from "./Loader";
const Home = ({isAuth}) => {
  const [postList, setpostList] = useState([]);
  const [loading, setloading] = useState(true)
  const postsCollectionRef = collection(db, "posts");
  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      // console.log(data.docs.map((doc) => ({...doc.data(), id : doc.id})))
      setpostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setloading(false)
    };
    getPosts();
  });
  console.log(isAuth)

  return (
    <div className="post-list">
      {/* {postList.map((post) => {
        return (
          <div className="post">
            <div className="post-title">
              <h1>{post.title}</h1>
            </div>
            <div className="post-text">{post.postText}</div>
            
            <div className="author-name">
              <h3>@{post.author.name}</h3>
            </div>
          </div>
        );
      })} */}
      {
        loading ? <Loader /> : postList.map((post) => {
          return (
            <div className="post">
              <div className="post-title">
                <h1>{post.title}</h1>
              </div>
              <div className="post-text">{post.postText}</div>
              
              <div className="author-name">
                <h3>@{post.author.name}</h3>
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

export default Home;
