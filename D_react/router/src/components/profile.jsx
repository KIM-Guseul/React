import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = (props) => {
  const navigate = useNavigate();

  return(
    <>
      <h1>Profile</h1>
      <button onClick={()=>{
        navigate('/home');
      }}>Go to home</button>
    </>
  )
}

export default Profile;