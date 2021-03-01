import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import inviteReducer from "../features/invite/inviteSlice";
import logger from "redux-logger";

export default configureStore({
  reducer: {
    goings: inviteReducer,
    notGoings: inviteReducer,
    user: inviteReducer,
    notGoingQty: inviteReducer,
    goingQty: inviteReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
