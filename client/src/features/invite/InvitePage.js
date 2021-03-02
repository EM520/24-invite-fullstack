import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  selectUser,
  selectGoing,
  selectNotGoing,
  getUserAsync,
  goingAsync,
  notGoingAsync,
  userNotGoing,
  userGoing,
} from "./inviteSlice";

export default function InvitePage() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const goings = useSelector(selectGoing);
  const notGoings = useSelector(selectNotGoing);
  // refactor to use slice
  useEffect(() => {
    dispatch(getUserAsync());
    dispatch(notGoingAsync());
    dispatch(goingAsync());
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
                  <strong>Name: </strong>
                  {item.name.first} {item.name.last}
                </p>
                <p>
                  <strong>Phone: </strong>
                  {item.cell}
                </p>
                <p>
                  <strong>Email: </strong> {item.email}
                </p>
              </div>
              <div className="container-btn">
                <botton
                  className="invite-btn-1"
                  onClick={() => dispatch(userNotGoing({ ...item, isGoing: false }))}
                >
                  <FaTimes />
                </botton>
                <botton
                  className="invite-btn-2"
                  onClick={() =>
                    dispatch(userGoing({ ...item, isGoing: true }))
                  }
                >
                  <FaCheck />
                </botton>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
