import React, { useState } from 'react'
import { Button } from '@mui/material'
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase';
import { useNavigate } from 'react-router-dom';
import { getFirestore, setDoc ,doc,getDoc } from 'firebase/firestore';
import Sidebar from '../studentSidebarAndHeader/Sidebar';

import { StudentDashboard } from '../studentDashboard/StudentDashboard';

const db=getFirestore();
const StudentHomePage = () => {
  const [preferences,setPreferences]=useState("");
  const navigate=useNavigate();
  const logout=()=>{
    signOut(auth)
      .then((user)=>{console.log(user);navigate("/signin")})
      .catch((error)=>{console.log(error)})
  }
  const submitForm=async ()=>{
    console.log(preferences);
    const uid=auth.currentUser.uid;
    const r=doc(db,"preferences","student");
    const pastDoc=await getDoc(r);
    
    const tem=pastDoc.data();
    console.log(tem);
    tem[uid]=preferences;
    const docRef=await setDoc(r,tem)
     .then((re)=>{
      console.log("data stored");
    })
     .catch((er)=>{console.log(er.message)});
  }


  return (
    <div>
      <Sidebar/>
      <StudentDashboard/>
    </div>
  )
}

export default StudentHomePage
