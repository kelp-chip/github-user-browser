import React, { useRef, useEffect } from "react";
import style from "../styles/SearchForm.module.css";
import button from "../styles/Button.module.css";

export default function SearchForm({
  handleGetUser,
  username,
  setUsername,
  warning,
}) {
  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  return (
    <form
      className={style.container}
      onSubmit={(e) => handleGetUser(e, inputEl)}
    >
      <input
        ref={inputEl}
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
