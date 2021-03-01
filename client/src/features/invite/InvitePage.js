import React, {  useEffect } from "react";
import { Link } from "react-router-dom";

// import { dispatch } from "./inviteSlice";
import { useSelector, useDispatch } from "react-redux";
import {
  selectUser,
  selectGoing,
  selectNotGoing,
  getUserAsync,
  userNotGoing,
  userGoing,
 
} from "./inviteSlice";

export default function InvitePage() {
 
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const goings = useSelector(selectGoing)
  const notGoings = useSelector(selectNotGoing)
  // refactor to use slice
  useEffect(() => {
    dispatch(getUserAsync());
    
  }, []);

  console.log(user);

  return (
    <div>
      <div className="cardNav">
        <Link className="inviteLink" to={`/going`}>
          <span>Going:{goings.length} </span>
        </Link>
        <Link className="inviteLink" to={`/not-going`}>
          <span>Not Going : {notGoings.length}</span>
        </Link>
      </div>

      <div className="nameCard">
        {user.map((item) => {
          return (
            <div>
              <img
                className="cardPic"
                src={item.picture.large}
                width="50%"
                height="50%"
              />{" "}
              <br />
              <div className="cardInfo">
                <p>
                  Name: {item.name.first} {item.name.last}
                </p>
                <p>Phone: {item.cell}</p>
                <p>Email: {item.email}</p>
              </div>
              <div className="container-btn">
                <botton
                  className="invite-btn-1"
                  onClick={() => dispatch(userNotGoing(item))}
                >
                  X
                </botton>
                <botton
                  className="invite-btn-2"
                  onClick={() => dispatch(userGoing(item))}
                >
                  √
                </botton>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
