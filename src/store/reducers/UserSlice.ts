//! Здесь redux toolkit

// import { IUser } from "../../models/IUser";
// import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import { fetchUsers } from "./ActionCreators";

// interface UserState {
//   users: IUser[];
//   isLoading: boolean;
//   error: string;
//   // count: number;
// }

// const initialState: UserState = {
//   users: [],
//   isLoading: false,
//   error: "",
//   // count: 0,
// };

// export const userSlice = createSlice({
//   name: "user",
//   initialState,
//   //здесь как switch/case конструкция
//   reducers: {
//     // action creators
//     /*     increment(state, action: PayloadAction<number>) {
//         state.count += action.payload;
//     } */
//     /*     usersFetching(state) {
//       state.isLoading = true;
//     },
//     usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
//       state.isLoading = false;
//       state.error = "";
//       state.users = action.payload;
//     },
//     usersFetchingError(state, action: PayloadAction<string>) {
//       state.isLoading = false;
//       state.error = action.payload;
//     }, */
//   },

//   //вариант с createAsyncThunk см.ActionCreator.ts reducers теперь можно сделать пустым
//   /*   extraReducers: {
//     //fulffilled - успешная загрузка
//     [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
//       state.isLoading = false;
//       state.error = "";
//       state.users = action.payload;
//     },
//     //pending - ожидание
//     [fetchUsers.pending.type]: (state) => {
//       state.isLoading = true;
//     },
//     //pending - ошибка
//     [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   }, */

//   //!см. builder notation new
//   //! https://redux-toolkit.js.org/api/createSlice#the-extrareducers-builder-callback-notation
//   extraReducers: (builder) => {
//     builder
//       .addCase(
//         fetchUsers.fulfilled.type,
//         (state, action: PayloadAction<IUser[]>) => {
//           state.isLoading = false;
//           state.error = "";
//           state.users = action.payload;
//         }
//       )
//       .addCase(
//         fetchUsers.rejected.type,
//         (state, action: PayloadAction<string>) => {
//           state.isLoading = false;
//           state.error = action.payload;
//         }
//       )
//       .addDefaultCase((state) => {
//         state.isLoading = true;
//       });
//   },
// });

// export default userSlice.reducer;
export default {};
