import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";

import Navbar from "./components/Navbar";
import { useContext } from "react";
import HomePage from "./components/HomePage";
import Resume from "./components/Resume";
import { Route, Routes } from "react-router-dom";
import HelpDesk from "./components/HelpDesk";
import NotificationsPage from "./components/NotificationsPage";
import ResourcesPage from "./components/ResourcesPage";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import UserContext from "./UserContext";
const darkTheme = (theme) =>
  createTheme({
    palette: {
      mode: theme ? "light" : "dark",
      primary: {
        main: "#56108a",
      },
      secondary: {
        main: "#767fd6",
      },
      Heading: {
        main: "#ffb366",
      },
      text: {
        main: theme ? "#6e14a6" : "#3c13f0",
      },
    },
  });
const App = () => {
  const { Theme, LoggedIn } = useContext(UserContext);
  return (
    <ThemeProvider theme={darkTheme(Theme)}>
      <Navbar color="primary" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Home" element={<HomePage />} />
        <Route
          path="/Help Desk"
          element={LoggedIn ? <HelpDesk /> : <SignIn />}
        />
        <Route path="/Notifications" element={<NotificationsPage />} />
        <Route path="/Resources" element={<ResourcesPage />} />
        <Route path="/Resume" element={LoggedIn ? <Resume /> : <SignIn />} />
        <Route path="/Login" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </ThemeProvider>
  );
};
export default App;
