import React from "react";
import style from "../styles/UserInfo.module.css";

export default function UserInfo({ user }) {
  return (
    <div className={style.cat}>
      <h1>{user.login}</h1>
      <img src={user.avatar_url} width="80px"></img>
    </div>
  );
}
