import React from "react";
import './Profile.css'
const Profile = (props) => {
  return (
    <div
      className="profile"
    >
      <h1>{props.email}</h1>
      <p>{props.name}</p>
    </div>
  );
};

//3 type
// 1. Inline styling

export default Profile;
