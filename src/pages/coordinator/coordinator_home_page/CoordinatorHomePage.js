import React from 'react'
import { Button } from '@mui/material'
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
//import './styles.css';
import { maxHeight } from '@mui/system';
import Sidebar from '../cordinatorSidebarHeader/Sidebar';
 

const CoordinatorHomePage = () => {
  const navigate=useNavigate();
  const logout=()=>{
    signOut(auth)
      .then((user)=>{console.log(user);navigate("/signin")})
      .catch((error)=>{console.log(error)})
  }

  const coordinatorHomePage = {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '40px',
    paddingLeft: '40px',
    paddingRight: '40px'
    //maxHeight: "100vh"

  }

  const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    paddingTop: '20px',
    textAlign: 'center',
    //height: '1000px'
  };

  const cardStyle = {
    width: '200px',
    height: '200px',
    marginBottom: '100px',
    textAlign: 'center',
    display: 'inline-block',
    verticalAlign: 'top',
    boxShadow: '2px 2px 2px 2px',
  };

  const numberStyle = { fontSize: '24px', fontWeight: 'bold' };


  return (
    <div>
    <Sidebar/>
    <div style={coordinatorHomePage}>
      <div style={cardContainerStyle}>
        {/* Students Card */}
        <Card sx={cardStyle} className='students'>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={numberStyle}>
              60
            </Typography>
            <Typography variant="body2">
              Students
            </Typography>
          </CardContent>
        </Card>

        <Card sx={cardStyle}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={numberStyle}>
              120
            </Typography>
            <Typography variant="body2">
              Publications
            </Typography>
          </CardContent>
        </Card>
      </div>



      {/* Profile Card */}
      <div id='college-profile' style={{ width: '400px', height: '400px',  marginTop: '20px' }}>
        <Card sx={{ maxWidth: 400, height: 400 }} className='d-flex flex-column justify-content-center align-items-center'>
          <img src = "data:image/jpeg;base64,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"/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className='text-center'>
              RGUKT
            </Typography>
            <Typography variant="body2" color="text.secondary">
              College Information Goes Here
            </Typography>
          </CardContent>
          <div>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </div>
        </Card>
      </div>




      <div style={cardContainerStyle}>
        {/* Publications Card */}
        <Card sx={cardStyle}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={numberStyle}>
              25
            </Typography>
            <Typography variant="body2">
              Guides
            </Typography>
          </CardContent>
        </Card>

        {/* Guides Card */}
        <Card sx={cardStyle}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={numberStyle}>
              2.4:1
            </Typography>
            <Typography variant="body2">
              Student to Guide Ratio
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
    <Button onClick={logout} >log out</Button>
    </div>
  );
}

export default CoordinatorHomePage
