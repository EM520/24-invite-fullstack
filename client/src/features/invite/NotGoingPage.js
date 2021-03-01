import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectNotGoing, notGoingAsync } from "./inviteSlice";
import { Link } from "react-router-dom";

export default function NotGoingPage() {
  const notGoing = useSelector(selectNotGoing);
  console.log(notGoing);
  const dispatch = useDispatch();

  useEffect(() => {
    //move to inviteSlice
    dispatch(notGoingAsync());
  }, []);
  return (
    <div>
      <Link className="backHomeLink" to={`/`}>
        BACK HOME PAGE
      </Link>
      <div className="notGoingList">
        <ul className="notGoingCard">
          {notGoing.map((item) => (
            <li className="notgoingli">
              <img className="notGoingImg" src={item.picture.large} />
              <div className="notGoingCardInfo">
                <p>
                  Name: {item.name.first} {item.name.last}
                </p>
                <p>Phone: {item.cell}</p>
                <p>Email: {item.email}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
