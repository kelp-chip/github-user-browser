import React from "react";
import style from "../styles/SearchForm.module.css";

export default function SearchForm({ handleGetUser, username, setUsername }) {
  return (
    <form onSubmit={handleGetUser}>
      <input
        className={style.cat}
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
}
