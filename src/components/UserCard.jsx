import React from "react";
import { useContext } from "react";
import UserContext from "./UserContext";

const UserCard = ({user, onDelete}) => {
  const {counting} = useContext(UserContext)

  // console.log(counting)
  return (
    <div>
      {/* <p>{user.name}</p> */}
      {/* <button onClick={onDelete}>Delete</button> */}
    </div>
  );
};

export default UserCard;
