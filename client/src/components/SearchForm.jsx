import React from "react";
import style from "../styles/SearchForm.module.css";
import button from "../styles/Button.module.css";

export default function SearchForm({
  handleGetUser,
  username,
  setUsername,
  user,
  warning,
}) {
  return (
    <form className={style.container} onSubmit={handleGetUser}>
      <input
        spellCheck="false"
        className={style.userInput}
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="enter github username"
      />
      {warning && warning}
      <input
        type="submit"
        value={user ? "find another user" : "find user"}
        className={button.largeBtn}
      />
    </form>
  );
}
