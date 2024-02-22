import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetUserType, GetLoginStatus } from "../components/Auth/User";

function Create() {


  const navigate = useNavigate();
  const userType = GetUserType(); //To be handled by backend developer; Tip fetch userType type from backend



  const userTypes = [
    { text: 'Farmer', to: '/FarmerCreate' },
    { text: 'Manufacture', to: '/ManufactureCreate' },
    { text: 'Driver', to: '/DriverCreate' },
    { text: 'Admin', to: '/AdminCreate' },
    { text: '', to: '/' },
  ];

  useEffect(() => {
    for (let i = 0; i < userTypes.length; i++) {
      if (userType === userTypes[i].text) {
        navigate(userTypes[i].to);
        return; // Exit the loop once a match is found
      }
    }

    // If no match is found, navigate to an error page or handle it as needed
    navigate('/error');
  }, [userType, userTypes, navigate]);

  return null;
}

export default Create;
