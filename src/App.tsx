//1.npx create-react-app . --template typescript - создаем реакт приложение с тайпскриптом
//2.npm i @types/react-redux redux react-redux redux-thunk axios
//3.npm i @reduxjs/toolkit

import React, { useEffect } from "react";
import "./App.css";
// import { userSlice } from "./store/reducers/UserSlice";
// import { useAppDispatch, useAppSelector } from "./hooks/redux";
// import { fetchUsers } from "./store/reducers/ActionCreators";
import PostContainer from "./components/PostContainer";
import PostContainer2 from "./components/PostContainer2";

function App() {
  //!Пример Счетчика
  // const { count } = useAppSelector((state) => state.userReducer);
  /* const { increment } = userSlice.actions; // Содержит action creator and reducer*/
  //!Пример Redux-toolkit
  /*   const dispatch = useAppDispatch();
  const { users, isLoading, error } = useAppSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, []); */

  return (
    <div className="App">
      {/*     <h1>{count}</h1>
    <button onClick={() => dispatch(increment(10))} >Increment</button> */}

      {/*    //!Пример Redux-toolkit  
 {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users, null, 2)} */}
      <div style={{ display: "flex" }}>
        <PostContainer />
        {/* <PostContainer2 /> */}
      </div>
    </div>
  );
}

export default App;
