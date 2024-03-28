import React from "react";
import UserContext from "./UserContext";
// eslint-disable-next-line react/prop-types
const UserContextProvider = ({ children }) => {
  const [Theme, SetTheme] = React.useState(1);
  const [user, SetUser] = React.useState("");
  const [LoggedIn, setLoggedIn] = React.useState(0);
  return (
    <UserContext.Provider
      value={{ user, SetUser, Theme, SetTheme, LoggedIn, setLoggedIn }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
