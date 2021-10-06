import React from "react";
import style from "../styles/SearchForm.module.css";
import button from "../styles/Button.module.css";

export default function SearchForm({
  handleGetUser,
  username,
  setUsername,
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
      {/* warning is displayed when username is not found */}
      {warning && <div className={style.warning}>{warning}</div>}
      <input type="submit" value="find user" className={button.largeBtn} />
    </form>
  );
}
