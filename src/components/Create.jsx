import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  
  const navigate = useNavigate();
  
  const user = 'Farmer'; //To be handled by backend developer; Tip fetch user type from backend

  const userType = [
    { text: 'Farmer', to: '/FarmerCreate' },
    { text: 'Manufacture', to: '/ManufactureCreate' },
    { text: 'Driver', to: '/DriverCreate' },
    { text: 'Admin', to: '/AdminCreate' },
    { text: '', to: '/' },
  ];

  useEffect(() => {
    for (let i = 0; i < userType.length; i++) {
      if (user === userType[i].text) {
        navigate(userType[i].to);
        return; // Exit the loop once a match is found
      }
    }

    // If no match is found, navigate to an error page or handle it as needed
    navigate('/error');
  }, [user, userType, navigate]);

  return null;
}

export default Create;
