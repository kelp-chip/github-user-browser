import React, { useState } from "react";
import axios from "axios";
import style from "./styles/App.module.css";
import UserInfo from "./components/UserInfo.jsx";
import SearchForm from "./components/SearchForm.jsx";

export default function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);

  const handleGetUser = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(
      `https://api.github.com/users/${username}`
    );
    await setUser(data);
  };

  return (
    <main className={style.container}>
      {user && <UserInfo user={user} />}
      <SearchForm
        handleGetUser={handleGetUser}
        username={username}
        setUsername={setUsername}
      />
    </main>
  );
}
