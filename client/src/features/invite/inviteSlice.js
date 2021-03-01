import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const inviteSlice = createSlice({
  name: "invite",
  initialState: {
    going: [],
    notGoing: [],
    user: [],
    
  },
  reducers: {
    // addToGoing: (state, action) => {
    //   state.going.push({ ...action.payload });
    // },
    // addToNotGoing: (state, action) => {
    //   state.notGoing.push({ ...action.payload });
    // },
    setNotGoing: (state, action) => {
      state.notGoing=action.payload
      
    },
    setGoing: (state, action) => {
      state.going =action.payload
    
    },
   
    setUser: (state, action) => {
      state.user = action.payload;
    },

    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

export const {
  setGoing,
  setNotGoing,
  setUser,
} = inviteSlice.actions;

export const userNotGoing = (user) => (dispatch) => {
  axios.post("/notGoingUsers", user).then((resp) => {
    dispatch(getUserAsync());
  });
};
export const userGoing = (user) => (dispatch) => {
  axios.post("/goingUsers", user).then((resp) => {
    dispatch(getUserAsync());
  });
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

export const getUserAsync = () => (dispatch) => {
  axios.get("/randomUser").then((resp) => {
    dispatch(setUser(resp.data));
  });
};

export const notGoingAsync = () => (dispatch) => {
  axios.get("/notGoingUsers").then((resp) => {
    dispatch(setNotGoing(resp.data));
  });
};

export const goingAsync = () => (dispatch) => {
  axios.get("/goingUsers").then((resp) => {
    dispatch(setGoing(resp.data));
  });
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.invite.value)`
export const selectGoing = (state) => state.goings.going;
export const selectNotGoing = (state) => state.notGoings.notGoing;
export const selectUser = (state) => state.user.user;
export const selectGoingQty = (state) => state.goingQty.goingQty;
export const selectNotGoingQty = (state) => state.notGoingQty.notGoingQty;


export default inviteSlice.reducer;
