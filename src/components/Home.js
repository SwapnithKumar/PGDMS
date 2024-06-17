import React, { useEffect, useState } from 'react'
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { getFirestore ,collection, getDocs, addDoc, doc ,getDoc, onSnapshot} from "firebase/firestore";
import UserContext from '../context/UserContext';

import '../components/Home.css'

import Loader from './Loader.gif'



const db=getFirestore();
const uni1=doc(db,"universities","uni1");

const Home = () => {
  const [userChecked,setUserChecked]=useState(false);
  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  let role="";
  const setRole=(r)=>{
    role=r;
  }
  const navigate=useNavigate();

  const [uid,setUid]=useState("");

  const onChangeUserData=async (uidd,rolee)=>{
    console.log(uidd,rolee);
    const r=await doc(db,"universities","uni1",rolee,uidd);
    const d=await getDoc(r);
    if(d.exists()){
      console.log("data exists",uidd,d.data());
    }
    else{
      console.log("data not exists");
    }
    if(role==="student"){
      navigate("/student-home-page");
    }
    if(role==="guide"){
      navigate("/guide-home-page");
    }
    if(role==="coordinator"){
      navigate("/coordinator-home-page");
    }
    if(role==="researcher"){
      navigate("/researcher-home-page");
    }
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/signin");
      }
      else if(!userChecked){
        const userUid=user.uid;
        setUid(userUid);
        console.log(typeof(userUid));
        console.log("uid @home1:",userUid);
        console.log("displayName: @home1",user.displayName);
        setRole(user.displayName);
        onChangeUserData(userUid,role);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [navigate]);
  
  
  const logout=()=>{
    signOut(auth)
      .then((user)=>{console.log(user);navigate("/signin")})
      .catch((error)=>{console.log(error)})
  }
  return (
    <UserContext.Consumer>
      {value=>{
        const {userData,changeUserData}=value
        console.log(userData);
        const onChangeUserData=async ()=>{
          const r=await doc(db,"universities","uni1","student",uid);
          const d=await getDoc(r);
          if(d.exists()){
            console.log("data exists",uid,d.data());
          }
          else{
            console.log("data not exists");
          }
          changeUserData(d.data());
        }
       
        return (
        <div className='home-page-bg-container'>
           <img src = {Loader} alt = "Loading..." className='gif-image'/>
          {/*
          {userChecked && <h1 className=''>{firstName} {lastName}</h1>}
          <Link to="/dashboard">dashboard</Link>
          <Button onClick={logout} >log out</Button>
          <Button onClick={onChangeUserData} >change</Button>
        */}
        </div>
        )
        }
  }
  </UserContext.Consumer>
  )
}

export default Home
