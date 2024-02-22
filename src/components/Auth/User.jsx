import React, { useState } from "react";


function fetchUserType(){
  return "Farmer";
}



function GetUserType() {
  const [userType, setUserType] = useState("");

  if (userType === "") {
    // perform API call to fetch user Type
    const fetchedUserType = fetchUserType();
    setUserType(fetchedUserType);
  }

  return userType;
}

function GetLoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // if (isLoggedIn) {
  //   alert("Not Logged In");
  // }

  return isLoggedIn;
}

// You can export components directly if you want
export { GetUserType, GetLoginStatus };
