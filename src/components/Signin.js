import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Signin.css'


import { useNavigate } from 'react-router-dom';
import { useState, useEffect} from 'react';

import { auth} from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

import {  onAuthStateChanged } from "firebase/auth";

import Tagline2 from './Tagline2.png'

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

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  //const [role,setRole]=useState("");
  const navigate=useNavigate()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      navigate("/");
    } else {
      console.log("error: signed out",user)
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
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
         
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
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
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e)=>{setEmail(e.target.value)}}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e)=>{setPassword(e.target.value)}}
              />
              {/*<FormControl>
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
          </FormControl>*/}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href='/forgot-password' variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>

          
      </Grid>
      <Copyright sx={{ mt: 5 }} />
    </ThemeProvider>
  );
}