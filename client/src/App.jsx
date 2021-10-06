import React, { useState } from "react";
import axios from "axios";
import style from "./styles/App.module.css";
import button from "./styles/Button.module.css";
import UserData from "./components/UserData.jsx";
import SearchForm from "./components/SearchForm.jsx";
import octocat from "./images/octo-md.png";

export default function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [warning, setWarning] = useState("");

  const handleGetUser = async (e) => {
    e.preventDefault();

    //if input is blank, set warning, do nothing
    if (!username.trim()) {
      await setWarning("🙏 Please enter a valid username.");
      return;
    }
    //query github API for username
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${username.trim()}`
      );
      await setWarning(false);
      await setUser(data);

      //if no user, set warning
    } catch {
      await setWarning("🙇‍♀️ Sorry, user could not found.");
    }
  };

  const handleClearUser = async () => {
    await setUser(null);
    await setUsername("");
  };

  return (
    <main className={style.container}>
      <h1 onClick={handleClearUser} className={style.logo}>
        Github User Search
      </h1>
      {!user && <img src={octocat} width="100%" alt="octocat"></img>}

      {/* if user is set, render user info component */}
      {user && <UserData user={user} />}

      {/* if user is set, render back button, otherwise render search form */}
      {user ? (
        <button
          type="button"
          className={button.largeBtn}
          onClick={handleClearUser}
        >
          Find another user
        </button>
      ) : (
        <SearchForm
          handleGetUser={handleGetUser}
          username={username}
          setUsername={setUsername}
          warning={warning}
        />
      )}
    </main>
  );
}
