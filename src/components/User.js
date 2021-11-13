import React from "react";
import Profile from "./Profile";

const profiles = [
  {
    name: "Amogh",
    email: "a@GMAIL.COM",
  },
  {
    name: "Kartik",
    email: "k@gmail.com",
  },
];

const User = () => {
  return (
    <div>
      {profiles.map((obj) => {
        return <Profile name={obj.name} email={obj.email} />;
      })}
    </div>
  );
};

export default User;
