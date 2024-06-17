import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { auth} from '../firebase';
import {  onAuthStateChanged } from "firebase/auth";
import { getFirestore ,collection, getDocs, addDoc, setDoc, doc} from "firebase/firestore";

import Tagline2 from './Tagline2.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Signin.css'


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const db=getFirestore();
const uni1=doc(db,"universities","uni1");
const researcherRef=collection(uni1,"researcher");
const studentRef=collection(uni1,"student");
const guideRef=collection(uni1,"guide");

const defaultTheme = createTheme();

// getDocs(colRef).then((snapshot)=>{
//   snapshot.docs.forEach((doc)=>{console.log(doc.data())});
// })
// .catch((err)=>console.log(err.message));


export default function SignUp() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [role,setRole]=useState(null);
  const [err,setErr]=useState("");
  const [errMsg,setErrMsg]=useState(false);
  const navigate=useNavigate();
  //const user=auth.currentUser;
  
// const unsubscribe = onAuthStateChanged(auth, (user) => {
//   if (user) {
//     navigate("/");
//   }
// });

  const unsubscribe=async()=>{
    const user=getAuth();
    if(user){
      //console.log(user.currentUser);
      await updateProfile(user.currentUser, {
        displayName: role
      })
        .then(() => {
         
          console.log('Display name updated successfully');
          console.log(user.currentUser.displayName);
        })
        .catch((error) => {
          // An error occurred
          console.error('Error updating display name:', error.message);
        });
      navigate("/");
    }
  
  }
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       navigate("/");
  //     }
  //   });
  
  //   return () => {
  //     unsubscribe();
  //   };
  // }, [navigate]);
  

  // useEffect(()=>{
  
  // if(user!==null) {navigate("/")}
  // // onAuthStateChanged(auth, (user) => {
  // //   if (user) {
  // //     const uid = user.uid;
  // //     console.log(user,uid);
  // //     navigate("/");
  // //   } else {
  // //     console.log("error: signed out")
  // //     navigate("/signup");
  // //   }
  // // });
  // }
  // )
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  //creating user 
  await createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
       console.log(userCredential,userCredential.user.uid);
       const uid=userCredential.user.uid;
       let ref=role;
      //  if(role==="guide") {ref=guideRef}
      //  else if(role==="researcher") {ref=researcherRef};
       const r=doc(db,"universities","uni1",role,uid);//users firestore reference
       console.log("data stored",r.id);
       const docRef=await setDoc(r,{
        email,
        firstName,
        lastName,
        role
      })
       .then((re)=>{
        console.log("data stored");
        unsubscribe();
      })
       .catch((er)=>{console.log(er.message)}); 
  })
    .catch((error) => {
      setErr(true);
      setErrMsg(error.message);
      console.log(error);
    });
   };
  
  return (

    <ThemeProvider theme={defaultTheme}>


      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className='tagline-container'>
          <div className='tagline-container'>
            <img src = {Tagline2} className='tagline-image'/>
          </div>  
        </Grid>
         
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square className='p-5'>
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    onChange={(e)=>{setFirstName(e.target.value)}}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    onChange={(e)=>{setLastName(e.target.value)}}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(e)=>{setEmail(e.target.value)}}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={(e)=>{setPassword(e.target.value)}}
                  />
                </Grid>
                {err===true && <Typography  variant="caption" display="block" gutterBottom style={{color:"red"}}>{errMsg}</Typography>}
              </Grid>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Role</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel value="student" control={<Radio onChange={()=>(setRole("student"))}/>} label="Student" />
                  <FormControlLabel value="guide" control={<Radio onChange={()=>(setRole("guide"))}/>} label="Guide" />
                  <FormControlLabel value="coordinator" control={<Radio onChange={()=>(setRole("coordinator"))}/>} label="Coordinator" />
                  <FormControlLabel value="other" control={<Radio onChange={()=>(setRole("researcher"))}/>} label="Researcher" />
                </RadioGroup>
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/signin" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>    
      </Grid>

      <Copyright sx={{ mt: 5 }} />
    </ThemeProvider>
  )
}