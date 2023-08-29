import React, { useState, useEffect } from "react";
import axios from "axios";

export const UserProfile = () => {
  const [profiles, setProfiles] = useState([]);
  const [number, setNumber] = useState(1); //no of pages
  const [profilesPerPage] = useState(12);

  // creating pagination
  const lastProfile = number * profilesPerPage;
  const firstProfile = lastProfile - profilesPerPage;
  const currentProfile = profiles.slice(firstProfile, lastProfile);

  useEffect(() => {
    const fetchUserProfiles = async () => {
      const users = await axios.get("https://randomuser.me/api/?results=30");
      setProfiles(users);
    };

    fetchUserProfiles();
  }, []);
  console.log(profiles);

  return <div>UserProfile</div>;
};
