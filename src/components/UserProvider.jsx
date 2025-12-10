import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";

const UserProvider = ({ children }) => {
  const [counting, setCounting] = useState(5);
  return (
    <UserContext.Provider value={{ counting, setCounting }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
