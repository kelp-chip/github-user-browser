import React, { useState, lazy } from "react";
import axios from "axios";
import style from "./styles/App.module.css";
import button from "./styles/Button.module.css";
import UserData from "./components/UserData.jsx";
import SearchForm from "./components/SearchForm.jsx";
import octo from "./images/octo-md.png";

export default function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [warning, setWarning] = useState("");

  const handleGetUser = async (e) => {
    e.preventDefault();
    if (!username) {
      await setWarning("");
      return;
    }
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${username}`
      );
      await setWarning(false);
      await setUser(data);
    } catch {
      await setWarning("user not found");
    }
  };

  const handleClearUser = async () => {
    await setUser(null);
    await setUsername("");
  };

  return (
    <main className={style.container}>
      <h1>Github User Search</h1>
      {!user && <img src={octo} width="100%" alt="octocat"></img>}
      {user && <UserData user={user} />}
      {user ? (
        <button className={button.largeBtn} onClick={handleClearUser}>
          Find another user
        </button>
      ) : (
        <SearchForm
          handleGetUser={handleGetUser}
          username={username}
          setUsername={setUsername}
          user={user}
          warning={warning}
        />
      )}
    </main>
  );
}
