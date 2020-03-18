import React from "react";
import { FetchPostsHOC } from "../HOC/FetchPostsHOC";
import { PostItem } from "./PostItem";
import styles from "./PostsList.module.css";

const PostsList = ({ posts, changeCount, ...props }) => (
  <div className={styles.postsWrapper}>
    {posts.map(post => (
      <PostItem key={post.id} post={post} changeCount={changeCount} />
    ))}
  </div>
);

export default FetchPostsHOC(PostsList);
