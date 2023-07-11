//RTKQuery
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IPost } from "../models/IPost";

export const postAPI = createApi({
  reducerPath: "postAPI", //Уникальный ключ, который будет определять текущий сервис
  baseQuery: fetchBaseQuery({
    //!url servera (при созданном сервере (Делаем в корне db.json -> npm install -g json-server -> json-server --watch db.json --port 5000 см.https://github.com/typicode/json-server))
    baseUrl: "http://localhost:5000",
    /*  baseUrl: "https://jsonplaceholder.typicode.com/", */
  }), // Базовый url на который этот сервис будет отправлять запросы
  tagTypes: ["Post"], //Чтобы toolkit знал куда добавить этот объект
  // по названиям эндпоинтов автоматически генерируются хуки 
  // например useFetchAllUPostsQuery(для fetchAllUPosts) или useCreatePostMutation(для createPost)
  // вызываются postAPI.useFetchAllUPostsQuery
  endpoints: (build) => ({
    //(query(get) - получать данные от сервера, mutation - чтобы их изменять)
    fetchAllUPosts: build.query<IPost[], number>({
      query: (limit: number = 2) => ({
        url: "/posts", //будет плюсоватся к основному
        params: {
          _limit: limit, // query parametrs  из строки запроса 
        },
      }),
      //Чтобы toolkit знал куда добавить этот объект(Этот endpoin обеспечивает моментальную доставку данных)
      providesTags: (result) => ["Post"],
    }),
    //! ниже для mutation(post)
    //Добавление поста
    createPost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: "/posts",
        method: "POST",
        body: post,
      }),
      //Чтобы toolkit знал куда добавить этот объект(Этот endpoin говорит что старые данные не актуальны)
      invalidatesTags: ["Post"],
    }),

    //Обновление поста(put)
    updatePost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: "PUT",
        body: post,
      }),
      invalidatesTags: ["Post"],
    }),

    //Удаление поста(delete)
    deletePost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Post"],
    }),
  }), //endpoint-ы на которрые мы будем отправлять запросы и менять состояния
});
