import React from 'react'
import { Button } from '@mui/material'
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase';
import { useNavigate } from 'react-router-dom';


const ResearcherHomePage = () => {
  const navigate=useNavigate();
  const logout=()=>{
    signOut(auth)
      .then((user)=>{console.log(user);navigate("/signin")})
      .catch((error)=>{console.log(error)})
  }
  return (
    <div>
      ResearcherHomePage
      <Button onClick={logout} >log out</Button>
    </div>
  )
}

export default ResearcherHomePage
