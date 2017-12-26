import React from 'react';
import { Link } from 'react-router-dom';

const ref = (props) => {
   return (
      <li className={props.type === "ref-main" ? "points-main" : ""}>
         <Link
            to={"/" + props.name}
            className={props.type}
            onClick={props.closeParent}
         >{props.name}</Link>
      </li>
   );
}

export default ref;