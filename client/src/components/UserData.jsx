import React from "react";
import style from "../styles/UserData.module.css";

export default function UserData({ user }) {
  return (
    <div className={style.container}>
      <img
        src={user.avatar_url}
        className={style.avatar}
        alt={`${user.login}'s avatar`}
      ></img>

      {/* renders user's name and username as link to github profile */}
      <div className={style.flexRow}>
        <h2 className={style.username}>{user.name}</h2>
        <a href={`https://github.com/${user.login}`} target="_blank">
          @{user.login}
        </a>
      </div>

      {/* renders user's number of followers, following and public repos */}
      <div className={style.accountInfo}>
        <div>
          <span>{user.following}</span> following
        </div>
        <div>
          <span>{user.followers}</span> followers
        </div>
        <div>
          <span>{user.public_repos}</span> public repos
        </div>
      </div>

      {/* renders user's location, place of work or job status */}
      <div className={style.flexRow}>
        {user.location && (
          <div>
            <i className="fas fa-map-marker-alt" id={style.locationIcon}></i>
            {user.location}
          </div>
        )}
        {user.company && (
          <div>
            <i class="far fa-building"></i> {user.company}
          </div>
        )}
        {user.hireable && (
          <div className={style.tagBtn}>
            <i class="far fa-building"></i> open to work
          </div>
        )}
      </div>

      {/* renders user's bio */}
      {user.bio && <p className={style.bio}>{user.bio}</p>}
    </div>
  );
}
