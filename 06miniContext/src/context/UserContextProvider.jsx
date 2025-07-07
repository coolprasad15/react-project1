import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null); // ✅ useState instead of setState

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children} {/* ✅ lowercase 'children' */}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
