import { configureStore } from "@reduxjs/toolkit";
import inviteReducer from "../features/invite/inviteSlice";
import logger from "redux-logger";

export default configureStore({
  reducer: {
    goings: inviteReducer,
    notGoings: inviteReducer,
    user: inviteReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
