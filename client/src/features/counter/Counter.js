import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, incrementGoing,selectCount,selectNotGoingCount } from "./counterSlice";
import {Link} from 'react-router-dom'


export  default function Counter() {
  const count = useSelector(selectCount);
  // const notGoingCount = useSelector(selectNotGoingCount);
  const dispatch = useDispatch();
  // const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <div >
        <Link className="inviteLink" to={`/going`}>
          <span>Going:{count} </span>
        </Link>
        <Link className="inviteLink" to={`/not-going`}>
          <span>Not Going : {count}</span>
        </Link>
      </div>
      <div>
      {/* <div className="container-btn"> */}
        <button
          className="invite-btn-1"
          onClick={() => dispatch(incrementGoing())}
        >
          X
        </button>
        <button
          className="invite-btn-2"
          onClick={() => dispatch(increment())}
        >
          √
        </button>
      </div>
      
    </div>
  );
}
// {/* <div className={styles.row}>
//         <input
//           className={styles.textbox}
//           aria-label="Set increment amount"
//           value={incrementAmount}
//           onChange={e => setIncrementAmount(e.target.value)}
//         />
//         <button
//           className={styles.button}
//           onClick={() =>
//             dispatch(incrementByAmount(Number(incrementAmount) || 0))
//           }
//         >
//           Add Amount
//         </button>
//         <button
//           className={styles.asyncButton}
//           onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
//         >
//           Add Async
//         </button> */}
//       {/* </div> */} */}
