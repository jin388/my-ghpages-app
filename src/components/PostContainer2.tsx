import React from "react";
import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";
import { IPost } from "../models/IPost";

const PostContainer2 = () => {
  //здесь автоматически генерируются хуки, автоматически проверяются ошиби и загрузка
  const { data: posts, error, isLoading } = postAPI.useFetchAllUPostsQuery(100);
  const [updatePost, {}] = postAPI.useUpdatePostMutation();
  const [deletePost, {}] = postAPI.useDeletePostMutation();

  const handleRemove = (post: IPost) => {
    deletePost(post);
  };

  const handleUpdate = (post: IPost) => {
    updatePost(post);
  };
  return (
    <div className="post__list">
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Error on loading...</h1>}
      {posts &&
        posts.map((post) => (
          <PostItem
            remove={handleRemove}
            update={handleUpdate}
            key={post.id}
            post={post}
          />
        ))}
    </div>
  );
};

export default PostContainer2;
