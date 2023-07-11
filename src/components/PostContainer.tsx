import React, { useEffect, useState } from "react";
import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";
import { IPost } from "../models/IPost";

const PostContainer = () => {
  const [limit, setLimit] = useState(100);
  //здесь автоматически генерируются хуки, автоматически проверяются ошиби и загрузка
  const {
    data: posts,
    error,
    isLoading,
    refetch, //нужна для обновления данных
  } = postAPI.useFetchAllUPostsQuery(limit /* , {pollingInterval: 1000} */); //pollingInterval - позволяет получать данные в определенный промежуток времени

  const [
    createPost, // функция для начала мутации
    {
      /* error: createError, isLoading: isCreateLoading */
    },
  ] = postAPI.useCreatePostMutation(/* Здесь может быть селектор */);
  const [updatePost, {}] = postAPI.useUpdatePostMutation();
  const [deletePost, {}] = postAPI.useDeletePostMutation();

  useEffect(() => {
    // setTimeout(() => {
    //   setLimit(3);
    // }, 2000);
  }, []);

  //!для mutation
  const handleCreate = async () => {
    const title = prompt();
    await createPost({ title, body: title } as IPost);
  };

  const handleRemove = (post: IPost) => {
    deletePost(post);
  };

  const handleUpdate = (post: IPost) => {
    updatePost(post);
  };

  return (
    <div className="post__list">
      <button onClick={() => refetch()}>REFETCH</button>
      <button onClick={handleCreate}>Add new post</button>
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

export default PostContainer;
