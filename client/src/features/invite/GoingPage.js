import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectGoing,goingAsync } from "./inviteSlice";
import { Link } from "react-router-dom";

export default function GoingPage() {
  const going = useSelector(selectGoing);
  console.log(going);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(goingAsync());
  }, []);
  return (
  <div>
      <Link className="backHomeLink" to={`/`}>
          BACK HOME PAGE
      </Link>
    
    <div className="goingList">
      <ul className="goingCard">
        {going.map((item) => (
          <li className="goingli">
            <img
              className="goingImg"
              src={item.picture.large}
            
            />
            <div className="goingCardInfo">
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
